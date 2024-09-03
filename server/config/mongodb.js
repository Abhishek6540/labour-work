const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/daily-work-connect', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB'.bgYellow.black);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;