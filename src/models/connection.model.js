const mongoose = require('mongoose');

const db_connection = async () => {
    try {
        const ConnectionInstance = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.MONGODB_NAME
        });
        console.log("Connected to Database:", ConnectionInstance.connection.host);
    } catch (error) {
        console.log("MongoDB Connection Failed:", error);
    }
}

module.exports = db_connection;
