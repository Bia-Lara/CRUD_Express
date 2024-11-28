import express from "express";
import AlunoController from "../controller/alunoController.js";

const routes = express.Router();

// Tratamento das rotas:

routes.get("/alunos", AlunoController.listarAlunos);

// routes.get("/alunos/:id", AlunoController.listarAlunoPorId);

// routes.post("/alunos", AlunoController.cadastrarAluno);

// routes.put("/alunos/:id", AlunoController.atualizarAluno);

// routes.delete("/alunos/:id", AlunoController.excluirAluno);


export default routes;