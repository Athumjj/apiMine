const express = require("express");
const app = express();
const nicks = [];

app.post("/", (req, res) => {
    const { value } = req.body;
    if (!nicks.includes(value)) {
        nicks.push(value);
        app.set("nickVar", nicks);
    }
    res.end("sucess");
});

app.get("/obter", (req, res) => {
    if (app.get("nickVar")) {
        res.end(app.get("nickVar"));
    }else {
        res.status(400).send("Erro: nick não obtido.");
    }
});

app.listen(process.env.PORT || 3000);