const express = require('express');
const app = express();
app.use(express.json());
const Api_Key = "f5ba4f200d5b759c8ba29d9e3fcc3052ca4ece0f49dae81c4eafd0fe";
app.post('/getString', (req, res) => {
    const {textField}=req.body;
    fetch('https://api.textrazor.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-TextRazor-Key': 'cc25b0126177dc4179fc7f9aaa42b39bbeeec751358b86be0ac8d401'
        },
        body: new URLSearchParams({
            'text': 'Hi, this is Nayan Tripathi. I live in Varanasi, India.',
            'extractors': 'entities'
        })
    }).then(res => res.json)
        .then(rec => {
            console.log(rec);
        })
        .catch(error => {
            throw(error);
        })
});

app.listen(3000, () => {
    console.log("connected");
});