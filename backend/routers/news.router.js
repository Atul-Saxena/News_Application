import express from "express";
import {
    getAllNews,
    createNews,
    getNewsById,
    updateNews,
    deleteNews,
} from "../controllers/newsControllers.js";

const router = express.Router();

router.get("/", getAllNews);
router.post("/", createNews);
router.get("/:id", getNewsById);
router.put("/:id", updateNews);
router.delete("/:id", deleteNews);

export default router;