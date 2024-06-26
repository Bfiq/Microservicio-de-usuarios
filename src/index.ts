import express from "express";

const app = express()

app.use(express.json())// middleware que transforma la req.body en un .json
const PORT = 3001

app.get('/', (_req, res)=>{
    
    console.log('Hola Mundo')
    res.send('Inicio')
})

app.listen(PORT, () => {
    console.log("Servidor escuchando");
    
})

/*
    POST Register
    POST login
    GET users
    UPDATE user
    PATCH user
*/