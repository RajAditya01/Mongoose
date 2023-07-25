// const mongoose = require("mongoose");

// mongoose
//     .connect("mongodb://localhost:27017/aditya", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("Connection successful........."))
//     .catch((err) => console.log(err));

// // Schema

// const playlistSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     ctype: String,
//     videos: Number,
//     author: String,
//     active: Boolean,

//     date: {
//         type: Date,
//         default: Date.now,
//     },
// });

// // collection and creation
// const Playlist = mongoose.model("Playlist", playlistSchema);

// const reactPlaylist = new Playlist({
//     name: "Reactjs",
//     ctype: "frontend",
//     videos: 80,
//     author: "Aditya",
//     active: true,
// });

// reactPlaylist.save();





// const mongoose = require("mongoose");

// (async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/aditya", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("Connection successful.........");

//         const playlistSchema = new mongoose.Schema({
//             name: {
//                 type: String,
//                 required: true,
//             },
//             ctype: String,
//             videos: Number,
//             author: String,
//             active: Boolean,
//             date: {
//                 type: Date,
//                 default: Date.now,
//             },
//         });

//         const Playlist = mongoose.model("Playlist", playlistSchema);

//         const reactPlaylist = new Playlist({
//             name: "Reactjs",
//             ctype: "frontend",
//             videos: 80,
//             author: "Aditya",
//             active: true,
//         });

//         const expressPlaylist = new Playlist({
//             name: "Expressjs",
//             ctype: "Backend",
//             videos: 80,
//             author: "Aditya",
//             active: true,
//         });

//         const MongoDb = new Playlist({
//             name: "MongoDb",
//             ctype: "Database",
//             videos: 90,
//             author: "Aditya",
//             active: true,
//         });

//         const Nodejs = new Playlist({
//             name: "Nodejs",
//             ctype: "Backend",
//             videos: 180,
//             author: "Aditya",
//             active: true,
//         });


//         const result =await Playlist.insertMany([reactPlaylist,expressPlaylist,MongoDb,Nodejs]);

//         //await reactPlaylist.save();
//         console.log("Playlist saved successfully!");
//     } catch (err) {
//         console.error("Error occurred:", err);
//     }
// })();

//         //createDocument();

//         // Call the getDocument() function inside the IIFE to ensure it executes after document insertion
//         const getDocument = async () => {
//             const result = await Playlist.find();
//             console.log(result);
//         };
//         getDocument();







const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/aditya", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connection successful.........");

        const playlistSchema = new mongoose.Schema({
            // ... schema definition ...
        });

        const Playlist = mongoose.model("Playlist", playlistSchema);

        // Move the document creation inside the try block
        const reactPlaylist = new Playlist({
            name: "Reactjs",
            ctype: "frontend",
            videos: 80,
            author: "Aditya",
            active: true,
        });

        const expressPlaylist = new Playlist({
            name: "Expressjs",
            ctype: "Backend",
            videos: 80,
            author: "Aditya",
            active: true,
        });

        const MongoDb = new Playlist({
            name: "MongoDb",
            ctype: "Database",
            videos: 90,
            author: "Aditya",
            active: true,
        });

        const Nodejs = new Playlist({
            name: "Nodejs",
            ctype: "Backend",
            videos: 180,
            author: "Aditya",
            active: true,
        });

        const result = await Playlist.insertMany([reactPlaylist, expressPlaylist, MongoDb, Nodejs]);

        console.log("Playlist saved successfully!");

        // Call the getDocument() function inside the IIFE to ensure it executes after document insertion
        const getDocument = async () => {
            const result = await Playlist.find();

            
            console.log(result);
        };
        getDocument();

    } catch (err) {
        console.error("Error occurred:", err);
    }
})();
