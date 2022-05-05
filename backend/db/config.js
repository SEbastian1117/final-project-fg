const mongoose = require("mongoose")


const dataBaseConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('La base de datos se ha conectado!')
    } catch (error) {
        console.log(error)
    }

}

module.exports = dataBaseConnection