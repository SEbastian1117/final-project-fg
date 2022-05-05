//desestructurando un objeto de express llamado response, para que Vscode me brinde opciones de express ya que en este archivo el no lo sabe
const { response } = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const generateJWT = require('../helpers/jwt')

const createUser = async (req, res = response) => {
    
    const { name, email, password } = req.body
    try {
        //verificar email
        const user = await User.findOne({ email })
        if(user) return res.status(400).json({
            ok: false,
            msg: 'El email ya existe'
        })

        //crear user con el model
        const dbUser = new User( req.body )

        //encriptar password
        const salt = bcrypt.genSaltSync()
        dbUser.password = bcrypt.hashSync( password, salt )

        //generar el JWT
        const token = await generateJWT(dbUser.id, name)

        //crear user in database
        await dbUser.save()

        //Generar res exitosa
        return res.status(200).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            token
        })
    
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        })
    }
    
}

const loginUser = async(req, res = response) => {

    const { email, password } = req.body

    try {

        const dbUser = await User.findOne({email})

        if(!dbUser){
            return res.status(400).json({
                ok: false,
                msg: 'El email no es válido'
            })
        }

        //confirmar si el password hace match
        const validatePassword = bcrypt.compareSync(password, dbUser.password)
        if(!validatePassword){
            return res.status(400).json({
                ok: false,
                msg: 'El password no es válido'
            })
        }

        //generar jwt
        const token = await generateJWT(dbUser.id, dbUser.name)

        //respuesta del service
        return res.status(200).json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email,
            token
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Contacte al equipo de soporte'
        })
    }
   
}

const validateTkn = async(req, res = response) => {

    const { uid } = req
    
    const dbUser = await User.findById(uid)

    //generar jwt
    const token = await generateJWT(uid, dbUser.name)

    return res.json({
        ok: true,
        uid,
        name: dbUser.name,
        email: dbUser.email,
        token
    })
}


module.exports = {
    createUser,
    loginUser,
    validateTkn
}