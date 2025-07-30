import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import http from 'http'
import { connectDB } from './library/db.js'

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json({limit: "4mb"}));
app.use(cors());

app.use('/api/status', (req, res) => res.send("Server is live")) 

await connectDB();


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
