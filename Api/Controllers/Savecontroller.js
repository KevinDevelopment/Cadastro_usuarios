const express = require("express");
const router = express.Router();
const Cadastro = require("../database/Cadastro");


router.post("/save", (request, response) => {

   const { nome, email, telefone, cep, numero, complemento, sugestao } = request.body;

   if (nome == undefined || email == undefined || telefone == undefined || cep == undefined || numero == undefined || complemento == undefined || sugestao == undefined) {
        console.log("Dados invalidos, verifique e tente novamente");
   }
   else {
    
        Cadastro.create({

            nome: nome,
            email: email,
            telefone: telefone,
            cep: cep,
            numero: numero,
            complemento: complemento,
            sugestao: sugestao

        }).then(() => {

            console.log("Dados inseridos com sucesso!")
            response.redirect("http://localhost:3000/cadastros")

        }).catch((erro) => {
            console.log(`Poxa, houve um erro :( ${erro}`)
        })
   }
   
});

module.exports = router;