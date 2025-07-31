import User from "../models/User.js";
import Message from "../models/Message.js";
import cloudinary from "../library/cloudinary.js";
import { io, userSocketMap } from '../server.js'


export const getUsersForSidebar = async (req, res) => {
  try {
    const currentUserId = req.user._id;

    // Get all users except the logged-in one
    const filteredUsers = await User.find({ _id: { $ne: currentUserId } }).select('-password');

    const unseenMessages = {};

    // For each user, count how many messages they sent to the current user that are unseen
    const promises = filteredUsers.map(async (user) => {
      const count = await Message.countDocuments({
        senderId: user._id,
        receiverId: currentUserId,
        seen: false,
      });

      if (count > 0) {
        unseenMessages[user._id] = count;
      }
    });

    await Promise.all(promises);

    res.json({ success: true, users: filteredUsers, unseenMessages });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};


export const getMessages = async (req, res) => {
    try {
        const { id: selectedUserId } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                {senderId: myId, receiverId: selectedUserId},
                {senderId: selectedUserId, receiverId: myId}
            ]
        })
        await Message.updateMany({senderId: selectedUserId, receiverId: myId}, {seen: true});
        res.json({success: true, messages});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

export const markMessageAsSeen = async (req, res) => {
    try {
        const { id } = req.params;
        await Message.findByIdAndUpdate(id, { seen: true });
        res.json({ success: true });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageUrl;

    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    const receiverSocketId = userSocketMap[receiverId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.json({ success: true, message: newMessage });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
