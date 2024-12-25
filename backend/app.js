import express from "express";
import router from "./routers/news.router.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/news", router);

export default app;