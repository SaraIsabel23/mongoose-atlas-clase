const express      = require('express');
const app          = express();
const dbConnection = require('./config/config')
const PORT         = 8080;


dbConnection();

app.get(('/'), (req, res) => {
    res.send("Funciona!!")
});

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`)
});

