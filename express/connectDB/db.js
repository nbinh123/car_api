const mongoose = require("mongoose")

async function connect() {

    // connect tới database blog
    try {
        await mongoose.connect('mongodb+srv://nbinh123:admin@cardatabase.i270fbp.mongodb.net/',{
            dbName : "car_database",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log("Connect project Successfully")
    } catch (error) {
        console.log("Connect project Failure!")
    }

    // connect tới database collection
    
}

module.exports = { connect };