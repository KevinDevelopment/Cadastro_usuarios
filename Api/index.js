const express = require("express");
const app = express();
const connection = require("./database/database");
const listcontroller = require("./Controllers/ListController");
const savecontroller = require("./Controllers/Savecontroller");
const deletecontroller = require("./Controllers/DeleteController");
const cors = require("cors");


//conexão banco de dados
connection.authenticate().then(() => {
    console.log("Conexão com banco estabelecida com sucesso.")
}).catch((erro) => {
    console.log(`Poxa, houve um erro :( ${erro}`)
});

app.use(cors());

//configurações express
app.use(express.urlencoded({extended:true}));

//rotas
app.use("/", listcontroller);
app.use("/", savecontroller);
app.use("/", deletecontroller);

const PORT =8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});