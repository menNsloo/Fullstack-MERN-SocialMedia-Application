const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    password: {
        required: true,
        type: String,
        min: 5,
    },
    picturePath: {
        type: String,
        default: "",
    },
    friends: {
        type: Array,
        default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
},
    { timestamps: true, }
);

const User = mongoose.model("User", UserScheme);
export default User;

