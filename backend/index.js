import dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "./app.js";
import connectDB from "./DB/dbconfig.js";

connectDB();

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});