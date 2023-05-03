const express = require('express');
const app = express();
const PORT = 3434;

let current = '';

app.get('/getString', (req, res) => {
  res.send(current);
});

app.post('/updateString', (req, res) => {
  const newString = req.body.newString;
  current = newString;
  res.send(`Current updated`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
