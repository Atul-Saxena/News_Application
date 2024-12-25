import News from "../models/news.model.js";
import mongoose from "mongoose";

const getAllNews = async (req, res) => {
    const news = await News.find({});
    res.status(200).json(news);
};

const createNews = async (req, res) => {    
    const { headline, description, link, img } = req.body;
    try {
        const news = await News.create({ headline, description, link, img });
        res.status(200).json(news);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

const getNewsById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such news" });
    }
    const news = await News.findById(id);
    if (!news) {
        return res.status(404).json({ error: "No such news" });
    }
    res.status(200).json(news);
};

const updateNews = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such news" });
    }
    const news = await News.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!news) {
        return res.status(404).json({ error: "No such news" });
    }
    res.status(200).json(news);
};

const deleteNews = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such news" });
    }
    const news = await News.findOneAndDelete({ _id: id });
    if (!news) {
        return res.status(404).json({ error: "No such news" });
    }
    res.status(200).json(news);
};

export { getAllNews, createNews, getNewsById, updateNews, deleteNews };