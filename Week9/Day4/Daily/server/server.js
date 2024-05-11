const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  const value = req.body.value;
  const message = `I received your POST request. This is what you sent me: ${value}`;
  console.log(value);
  res.send(message);
});


app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
