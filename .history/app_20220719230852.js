const express = require('express');
const https = require('https');
const app = express();
app.use(express.json());
const Api_Key = "f5ba4f200d5b759c8ba29d9e3fcc3052ca4ece0f49dae81c4eafd0fe";
app.post('/getString', (req, res) => {
    const {textField}=req.body;

});
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
app.listen(3000, () => {
    console.log("connected");
});