const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    residents: {
        type: [String],
        default: [],
    },
});

const Community = mongoose.model("Community", communitySchema);
module.exports = Community;