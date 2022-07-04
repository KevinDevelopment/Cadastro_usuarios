const express = require("express");
const router = express.Router();
const Cadastro = require("../database/Cadastro");


router.delete("/delete/:id", (request, response) => {
    const { id } = request.params;

    Cadastro.destroy({
        where: {
            id: id
        }
    }).then(() => {
        response.redirect("http://localhost:3000/cadastros")
    }).catch((erro) => {
        console.log(`Ops, houve um erro ${erro}`)
    })

});

module.exports = router;