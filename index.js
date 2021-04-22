const express = require("express")
const app = express();
const cors = require("cors");
const path = require('path')
const PORT = process.env.PORT || 5000


//middleware
app.use(express.json()) //permite usar el req.body
app.use(cors())

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'client/build')))    
}

console.log(path.join(__dirname, 'client/build'))


//rutas de registro y login
app.use('/auth', require('./rutas/autenticacion'))

app.listen(PORT, () =>{
    console.log('El servidor esta corriendo en el puerto ', PORT)
})