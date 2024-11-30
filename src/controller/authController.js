import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

class AuthController {
    static async register(req, res) {
        const { username, password } = req.body;

        try {

            const user = User.findOne({username});

            if(user){
                return res.status(500).json({ message: `Usuário já existe!` });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ username, password: hashedPassword });
            res.status(201).json({ message: "Usuáriocriado!", user: newUser });
        } catch (error) {
            res.status(500).json({ message: `Erro ao registrar usuário` });
        }
    }

    static async login(req, res) {
        const { username, password } = req.body;

        try{
            const user = await User.findOne({username});
       
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({message: `Login Incorreto!`});
            }

            const token = jwt.sign(
                { username: username },
                process.env.JWT_SECRET, 
                { expiresIn: '1h', algorithm: 'HS256' } 
            );
        
            res.status(200).json({message: `Login efetuado pelo usuário ${username}`, jwt: token });
        }catch(error){
            res.status(500).json({ message: `Erro ao realizar login: ${error.message}` });
        }
        
    }
}

export default AuthController;

