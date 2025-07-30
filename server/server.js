import express from 'express'
import "dotenv/config"
import cors from 'cors'
import http from 'http'

const app = express();
const server = http.createServer(app);

app.use(express.json({limit: "4mb"}));
app.use(cors());

app.use('/api/status', (req, res) => res.send("Server is live")) 

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
