const express = require('express');
const uuid = require('uuid');
const cors = require('cors');

const source = require('./source');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/api/suppliers', (req, res) => {
  res.send({
    suppliers: source.suppliers
  });
});

app.post('/api/suppliers', (req, res) => {
  const { supplier } = req.body;

  source.suppliers.push({
    id: uuid.v4(),
    ...supplier
  });

  res.status(200).send();
});

app.get('/api/houses', (req, res) => {
  res.send({
    houses: source.houses
  });
});

app.get('/api/houses/:supplierId', (req, res) => {
  const { supplierId } = req.params;

  const houses = source.houses.filter((house) => house.supplierId === supplierId);

  res.send({ houses });
});

app.post('/api/houses', (req, res) => {
  const { house } = req.body;

  source.houses.push({
    id: uuid.v4(),
    ...house
  });

  res.status(200).send();
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
