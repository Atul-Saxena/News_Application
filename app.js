import express from "express";
import router from "./routers/news.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/news", router);

export default app;