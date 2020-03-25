const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());

//Fazendo o node entender que o body das requisições terá um formato json. Fazer isso antes das rotas.
app.use(express.json());

app.use(routes);

app.listen(3333);
