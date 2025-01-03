import express from "express";
import newsRouter from "./routers/news.router.js";
import usersRouter from "./routers/users.router.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/news", newsRouter);
app.use("/api/users", usersRouter);

export default app;