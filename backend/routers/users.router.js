import express from "express";
import { signUp, login, verifyToken } from "../controllers/usersControllers.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);
router.get("/verifytoken", verifyToken);

export default router;