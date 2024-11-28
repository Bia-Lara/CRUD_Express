import express from "express";
import AlunoController from "../controller/alunoController.js";

const routes = express.Router();

routes.get("/alunos", AlunoController.listarAlunos);
routes.get("/alunos/media", AlunoController.listarMediaAlunos);
routes.get("/alunos/aprovados", AlunoController.listarStatusAlunos);
routes.post("/alunos", AlunoController.cadastrarAluno);
routes.get("/alunos/:id", AlunoController.listarAlunoPorId);
routes.put("/alunos/:id", AlunoController.atualizarAluno);
routes.delete("/alunos/:id", AlunoController.excluirAluno);



export default routes;