const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/aditya", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection successful........."))
    .catch((err) => console.log(err));

// Schema

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,

    date: {
        type: Date,
        default: Date.now,
    }
});

// Model
const Playlist = mongoose.model("Playlist", playlistSchema);
