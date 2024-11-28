import aluno from "../models/Aluno.js";

class AlunoController{
    static async listarAlunos (req, res) {

        try {

            const listaAlunos = await aluno.find({});
            res.status(200).json(listaAlunos);

        } catch (erro) {

            res.status(500).json( { message: `${erro.message} - Falha na requisição.` });
        } 

    };

    static async cadastrarAluno(req, res) {
        try {

            const novoAluno = await aluno.create(req.body);
            res.status(201).json( { message: "Criado com sucesso.", aluno: novoAluno } );

        } catch (erro) {

            // 500 é erro interno do servidor:
            res.status(500).json( { message: `${erro.message} - Falha ao cadastrar aluno.` } );
        }
    }


    static async listarAlunoPorId (req, res) {

        try {
            const id = req.params.id;
            const alunoEncontrado = await aluno.findById(id);
            res.status(200).json(alunoEncontrado);

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - Falha na requisição do aluno.`});
        }

    };

    static async atualizarAluno (req, res){
        try {

            const id = req.params.id;
            await aluno.findByIdAndUpdate(id, req.body);
            res.status(200).json( { message: "Aluno atualizado!" } );

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - Falha na atualização.` } );
        
        };
    }

    static async excluirAluno (req, res){
        try {

            const id = req.params.id;
            await aluno.findByIdAndDelete(id);
            res.status(200).json( { message: "Aluno removido!" } );

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - Falha na remoção.` } );
        
        };
    }


    static async listarMediaAlunos (req, res){
        try {

            const listAlunos = await aluno.find({});

            const alunosComMedia = listAlunos.map(aluno => {
                const media = (aluno.nota1 + aluno.nota2) / 2;
                return {
                    nome: aluno.nome,
                    media: media
                };
            });
    
            res.status(200).json(alunosComMedia);
          
        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - Falha na requisição.` });
        
        };
    }

    static async listarStatusAlunos (req, res){
        try {

            const listAlunos = await aluno.find({});

            const statusAlunos = listAlunos.map(aluno => {
                const media = (aluno.nota1 + aluno.nota2) / 2;
                if(media>=6){
                    return {
                        nome: aluno.nome,
                        status: "aprovado"
                    };
                }

                return {
                    nome: aluno.nome,
                    status: "reprovado"
                };
                
            });
    
            res.status(200).json(statusAlunos);
          
        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - Falha na requisição.` });
        
        };
    }
}

export default AlunoController;