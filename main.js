const express = require("express");
const app = express();
const nicks = [];

app.use(express.json());

app.post("/", (req, res) => {
    const { value } = req.body;
    if (!nicks.includes(value)) {
        nicks.push(value);
        app.set("nickVar", nicks);
    }
    res.json("sucess");
});

app.get("/obter", (req, res) => {
    const nicke = app.get("nickVar");
    if (nicke) {
        res.json({ nicke });
    }else {
        res.status(400).send("Erro: nick não obtido.");
    }
});

app.listen(process.env.PORT || 3000);
