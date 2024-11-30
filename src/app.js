import express from "express";
import dotenv from "dotenv";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

dotenv.config();

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

export default app;