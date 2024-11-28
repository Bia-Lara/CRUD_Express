import express from "express";
import rotasAlunos from "./alunosRoutes.js";

const routes = (app) => {

    app.route("/").get( (req, res) => {

        res.status(200).send("Hello World!")

    } );

    app.use( express.json(), rotasAlunos );

};

export default routes;