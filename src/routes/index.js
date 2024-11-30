import express from "express";
import rotasAlunos from "./alunosRoutes.js";
import authRoute from "./authRoutes.js";

const routes = (app) => {


    app.use( express.json());
    app.use(rotasAlunos)
    app.use(authRoute)

    app.route("/").get( (req, res) => {

        res.status(200).send("API de Alunos")

    });    

};

export default routes;