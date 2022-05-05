const { Router } = require('express')
const { check } = require('express-validator')
const { createUser, loginUser, validateTkn } = require('../controllers/auth')
const validateFields = require('../middlewares/validate-fields')
const validateJwt = require('../middlewares/validate-jwt')
const router = Router()

//crear nuevo usuario
router.post('/new', [
    check('name', 'El nombre es obligatorio!').not().isEmpty(),
    check('email', 'Ingresa un email válido!').isEmail(),
    check('password', 'Ingresa al menos una mayúscula, una minúscula, un número, un caracter especial y al menos una longitud de 6').isStrongPassword(),
    validateFields
] ,createUser)


//login usuario
router.post('/', [
    check('email', 'No ingresaste el correo electrónico!').isEmail(),
    check('password', 'El password es obligatorio, ingresa un password válido').isStrongPassword(),
    validateFields
], loginUser)

//Validar y revalidar el token
router.get('/renew', validateJwt ,validateTkn)

module.exports = router