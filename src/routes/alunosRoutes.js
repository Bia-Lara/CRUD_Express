import express from "express";
import AlunoController from "../controller/alunoController.js";
import authenticateJWT from "../middleware/authenticateJWT.js";

const router = express.Router();

router.get("/alunos", authenticateJWT, AlunoController.listarAlunos);
router.get("/alunos/media", authenticateJWT, AlunoController.listarMediaAlunos);
router.get("/alunos/aprovados", authenticateJWT, AlunoController.listarStatusAlunos);
router.post("/alunos", authenticateJWT, AlunoController.cadastrarAluno);
router.get("/alunos/:id", authenticateJWT, AlunoController.listarAlunoPorId);
router.put("/alunos/:id", authenticateJWT, AlunoController.atualizarAluno);
router.delete("/alunos/:id", authenticateJWT, AlunoController.excluirAluno);



export default router;