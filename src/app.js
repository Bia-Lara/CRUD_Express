import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
const conexao = await conectaNaDatabase();
app.use( express.json() );

conexao.on("error", (erro) => {
    console.error("Erro de conexão!", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

routes(app);

app.get("/", (req, res) => {

    res.status(200).send("Hello World!");

} );

export default app;