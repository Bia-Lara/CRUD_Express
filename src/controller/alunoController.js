import aluno from "../models/Aluno.js";

class AlunoController{
    static async listarAlunos (req, res) {

        try {

            const listaAlunos = await aluno.find({});
            res.status(200).json(listaAlunos);

        } catch (erro) {

            res.status(500).json( { message: `${erro.message} - Falha na requisição.` } );
        } 

    };
}

export default AlunoController;