const express = require('express')
const router = express.Router()
const pool = require('../db')
const bcrypt = require('bcrypt')

//Ruta de registro
router.post('/register', async (req, res) =>{
    try {
        
        //1. Desestructurar el req.body(correo, user_name, pass)
        const {correo, user_name, pass} = req.body

        //2. Checar si el usuario existe (si existe lanzar un error)
        //lo que va en corchetes es lo que va a reemplazar $1
        const user = await pool.query("SELECT * FROM usuario WHERE correo = $1", [
            correo
        ])

        if(user.rows.length !== 0){
            return res.status(401).send('El usuario ya existe') //401 no autorizado
        }

        //3. Bcrypt la contrasena
        const rondasSalt = 10;
        const salt = await bcrypt.genSalt(rondasSalt);
        const hashedPass = await bcrypt.hash(pass, salt);

        //4. Ingresar el usuario en la db
        const nuevoUsuario = await pool.query("INSERT INTO usuario (correo, user_name, pass) VALUES ($1, $2, $3) RETURNING *", [
            correo,
            user_name,
            hashedPass 
        ])

        
        return res.json("Usuario Registrado")

    } catch (err) {
        console.error()
        res.status(500).send('Error en el servidor')
    }
})

//Ruta de login
router.post('/login', async(req, res) => {
    try {
        //1.Destructurar el req.body
        const { user_name, pass } = req.body

        //2. Checar si el usuario existe (si no existe lanzar un error)
        const usuario = await pool.query('SELECT * FROM usuario WHERE user_name = $1', [
            user_name
        ])

        if(usuario.rows.length === 0){
            return res.status(401).send('Usuario o Contraseña incorrectas')
        }

        //3. Checar si la contrasena ingresada es igual a la de la db
        const validacion =  await bcrypt.compare(pass, usuario.rows[0].pass);
        
       
        if(validacion === false){
            return res.status(401).send('Cédula o Contraseña Incorrectos')
        }

        

        return res.json("Sesion Iniciada")
        

    } catch (error) {
        console.error()
        res.status(500).send('Error en el servidor')
    }
})

module.exports = router;


