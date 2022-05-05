const { Router } = require('express')
const { createPet, checkPets, checkPet, updatePet, deletePet, setDatabase } = require('./../controllers/pet')
const upload = require('./../middlewares/upload')
const router = Router()



router.post('/new-pet', createPet)

router.get('/new-pet/check', checkPets)

router.get('/new-pet/:id' , checkPet)

router.put('/update/:id', updatePet)

router.delete('/delete/:id', deletePet)

router.get('/database', setDatabase)

module.exports = router

