const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('🔥 Database connected successfully 🔥');
    } catch (error) {
        console.error('DB connection error: ', error);
        process.exit(1);
    }
};

module.exports = connectDB;
