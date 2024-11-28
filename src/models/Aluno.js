import mongoose from "mongoose"

const alunoSchema = new mongoose.Schema( {

    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    ra: { type: String },
    nota1: { type: Number },
    nota2: { type: Number }

}, { versionKey: false } );

const aluno = mongoose.model("alunos", alunoSchema);

export default aluno;