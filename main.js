const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
    const { value } = req.body;
    if (value) {
        app.set("nickVar", value);
        res.json({ valuea: "sucess" });
    }else {
        res.status(400).json({ erro: "nick não encontrado." });
    }
});

app.get("/obter", (req, res) => {
    const nicke = app.get("nickVar");
    if (nicke) {
        res.json({ value: nicke });
    }else {
        res.status(400).json({ erro: "nick não obtido." });
    }
});

app.listen(process.env.PORT || 3000);
