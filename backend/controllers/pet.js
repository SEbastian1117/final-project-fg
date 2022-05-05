const Pet = require('./../models/Pet')
const { response } = require('express')
const database = require('./../db/vets.json')

//crear nueva mascota
const createPet = async(req, res = response) => {
    const url = `${req.protocol}://${req.get('host')}` 
    const { name, age, race, species, photo, imgUrl } = req.body
    try {
        let myPet = await Pet.findOne( { name } )
        if(myPet) return res.status(400).json({
            ok: false,
            msg: 'The pet is already exist!',
            myPet
        })
        // let imgUrl = null
        // if(req.file.filename) {
        //     imgUrl = `${url}/public/${req.file.filename}`
        // }else{
        //     imgUrl = null
        // }
        
        myPet = new Pet({
            name: name,
            age: age,
            race: race,
            species: species,
            photo: photo,
            imgUrl: imgUrl
        })
        await myPet.save()
        res.status(200).json({
            ok: true,
            msg: 'The pet has been create succesfuly',
            myPet
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'An error has ocurred, please contact to support'
        })
    }
}

//consultar mascotas
const checkPets = async(req, res = response) => {
    try {
        const myPet = await Pet.find()
        res.send({
            myPet
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: 'We did not find any pets'
        })
    }
}
// consultar mascota por id
const checkPet = async(req, res = response) => {
    try {
        const myPet = await Pet.findById(req.params.id)
        if(!myPet) return res.status(400).json({
            ok: false,
            msg: 'The pet doesnt exist in our system'
        })
        res.status(200).json({
            ok: true,
            myPet
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'An error has ocurred, please contact to support'
        })
    }
}

//actualizar mascota
const updatePet = async(req, res = response) => {
    try {
        let imgUrl = req.body.imgUrl

        let myPet = await Pet.findById(req.params.id)

        if(!myPet) return res.status(404).json({
            ok: false,
            msg: 'There is no any pet to update'
        })

        myPet.imgUrl = imgUrl
        myPet = await Pet.findOneAndUpdate({_id: req.params.id} , {imgUrl: imgUrl}, {new: true})
        res.status(200).json({
            ok: true,
            myPet
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'An error has ocurred, please contact to support'
        })
    }
}

//eliminar mascota
const deletePet = async(req, res = response) => {
    try {
        const pet = await Pet.findById(req.params.id)
        if(!pet) return res.status(404).json({
            ok: false,
            msg: 'The pet doesnt exist in our system!'
        })
        await Pet.findByIdAndRemove({_id: req.params.id})
        res.json({
            ok: true,
            msg: 'The pet has been deleted'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'An error has ocurred, please contact to support'
        })
    }
}
//recibir base de datoi
const setDatabase = async(req, res = response) => {
    try {
        if(database) return await res.status(200).send(database)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            msg: 'database doesnt exist'
        })
    }
}

module.exports = {
    createPet,
    checkPets,
    checkPet,
    updatePet,
    deletePet,
    setDatabase
}