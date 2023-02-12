const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    host:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    communityID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community",
    },
    participant:{
        type: [String],
        default: [],
    },
    title:{
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;