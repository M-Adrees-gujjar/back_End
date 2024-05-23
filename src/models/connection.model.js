const mongoose = require('mongoose');

const db_conection = async () => {
    try {
        // const ConnectionInstance = await mongoose.connect("mongodb://localhost:27017");
        const ConnectionInstance = await mongoose.connect(`mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@cluster0.fyd5j7f.mongodb.net`);
        console.log("Connected DataBase : ", ConnectionInstance.connection.host);
    } catch (error) {
        console.log("MongoDB Connection Failed", error);
    }
}



module.exports = db_conection;
