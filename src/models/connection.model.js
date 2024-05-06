const mongoose = require('mongoose');

const db_conection = async () => {
    try {
        const ConnectionInstance = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected DataBase : ", ConnectionInstance.connection.host);
    } catch (error) {
        console.log("MongoDB Connection Failed", error);
    }
}



module.exports = db_conection;
