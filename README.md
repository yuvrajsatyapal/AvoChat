# AvoChat
    AvoChat is a real-time, full-stack chat application built with the MERN stack, providing users with seamless 
    1-on-1 messaging, image sharing, and persistent conversations. Designed with responsiveness and usability 
    in mind, AvoChat enables fast, private communication with a clean and intuitive UI.   

# Link - https://avo-chat.vercel.app

# ✨ Features
    💬 Real-Time Messaging: Instantly send and receive messages using Socket.IO for live communication between users.

    🧑‍🤝‍🧑 1-on-1 Private Chats: Select users from the sidebar and initiate private conversations in a secure environment.

    📷 Image Messaging: Easily send and receive images with previews and real-time updates.

    🔐 JWT Authentication: Secure login and signup using JSON Web Tokens, enabling stateless session management.

    🟢 Online Status Indicators: See who’s online or offline, improving engagement and awareness in conversations.

    📱 Responsive Design: Optimized for all screen sizes, from mobile phones to desktops.

    🔒 Cloud Storage with Cloudinary: Uploaded images are stored securely using Cloudinary with dynamic delivery.

     🧰 Modern UI/UX: Built with Tailwind CSS and modern design principles for a smooth and minimal chat experience.

# 🚀 Tech Stack
    Frontend: React.js, Tailwind CSS
    Backend: Node.js, Express.js, MongoDB
    Real-time Communication: Socket.IO
    Authentication: JWT (JSON Web Tokens)
    Image Uploads: Cloudinary
    State Management: React Context API

# 🔑 Key Insights
    🔐 JWT Secured Sessions
    AvoChat uses stateless JWT tokens to manage user sessions, improving both performance and security without the need for server-side sessions.
    
    📷 Real-Time Image Sharing
    With Cloudinary integration, users can send images in real time—making the chat experience richer and more interactive.
    
    💬 Socket.IO-Based Live Messaging
    Real-time messaging is powered by Socket.IO, delivering instant updates without refreshing the page.
    
    🧑‍🤝‍🧑 Simple, Focused Chat Experience
    The interface is kept minimal, focused on core messaging functionality, keeping user attention on conversations.
    
    📱 Mobile-Friendly by Default
    Built with a mobile-first approach, AvoChat works seamlessly across all screen sizes with responsive layouts.

# 📦 Installation
```js # Clone the repository
git clone https://github.com/yuvrajsatyapal/AvoChat.git
cd AvoChat

# Backend setup
cd backend
npm install
npm run dev

# In a new terminal window, setup frontend
cd ../frontend
npm install
npm run dev

⚙️ Note: Create a .env file in both frontend and backend folders with appropriate variables
(e.g., MongoDB URI, JWT_SECRET, Cloudinary credentials, etc.)
```

  
