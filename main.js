const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
    const { value } = req.body;
    app.set("nickVar", value);
    res.json("sucess");
});

app.get("/obter", (req, res) => {
    const nicke = app.get("nickVar");
    if (nicke) {
        res.end(nicke);
    }else {
        res.status(400).send("Erro: nick não obtido.");
    }
});

app.listen(process.env.PORT || 3000);
