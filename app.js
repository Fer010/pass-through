const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3434;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let current = '';

app.get('/getString', (req, res) => {
  res.send(current);
});

app.post('/updateString', (req, res) => {
    let newString;
    try {
      newString = req.body.newString;
    } catch (error) {
      console.error(error);
      res.status(400).send('Invalid request body');
      return;
    }
  current = newString;
  res.send(`Current updated`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
