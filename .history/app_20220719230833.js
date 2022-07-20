const express = require('express');
const https = require('https');
const app = express();
app.use(express.json());
const Api_Key = "f5ba4f200d5b759c8ba29d9e3fcc3052ca4ece0f49dae81c4eafd0fe";
app.post('/getString', (req, res) => {
    const {textField}=req.body;

});

app.listen(3000, () => {
    console.log("connected");
});