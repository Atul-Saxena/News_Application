import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    headline:{
        type: String,
        required: [true, "Headline is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    link: {
        type: String,
        required: false,
        default: "",
    },
    img: {
        type: String,
        required: false,
        default: "",
    },
},{timestamps: true});

const News = mongoose.model("News", newsSchema);

export default News;