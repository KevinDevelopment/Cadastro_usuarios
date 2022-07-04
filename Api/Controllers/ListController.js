const express = require("express");
const router = express.Router();
const Cadastro = require("../database/Cadastro");

router.get("/list", (request, response) => { 
    
   Cadastro.findAll({raw: true}).then((Cadastro) => {
        response.send(Cadastro)
   });
    
});

module.exports = router;
