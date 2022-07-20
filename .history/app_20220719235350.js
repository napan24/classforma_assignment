const express = require('express');
const app = express();
//set the port
const port = 3000;

app.use('/textGet', (req, res) => {
  call_text();
})
async function call_text() {
  const response = await fetch('https://api.textrazor.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-TextRazor-Key': 'cc25b0126177dc4179fc7f9aaa42b39bbeeec751358b86be0ac8d401'
    },
    body: new URLSearchParams({
      'text': 'Hi, this is Nayan Tripathi. I live in Varanasi, India.',
      'extractors': 'entities'
    })
  })
  const response_json = await response.json()
  res.send(response_json.response.entities)
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));