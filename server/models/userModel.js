const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    phone: {
        type: Number,
        required: [true, "Phone number is required"],
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message: '{VALUE} is not a valid phone number'
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
    },
    access_token: {
        type: String,
    },
    otp: {
        type: Number,
    },
    image: {
        type: String,
    },
    roles: {
        type: String,
        ref: 'Role'
    },
}, {
    timestamps: true,  // Enable automatic timestamps (createdAt, updatedAt)
    versionKey: false  // Disable the __v field
});

module.exports = mongoose.model("User", UserSchema);
