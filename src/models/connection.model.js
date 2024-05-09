const mongoose = require('mongoose');

const db_connection = async () => {
    try {
        const ConnectionInstance = await mongoose.connect("mongodb+srv://adrees:adrees123@cluster0.fyd5j7f.mongodb.net", {
            dbName: "adrees"
        });
        console.log("Connected to Database:", ConnectionInstance.connection.host);
    } catch (error) {
        console.log("MongoDB Connection Failed:", error);
    }
}

module.exports = db_connection;
