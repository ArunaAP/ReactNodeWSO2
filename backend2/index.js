const express = require('express');
const cors = require('cors');
const Customer = require('./Customer');
const app = express();
const mongoose = require('mongoose');

dbURI =
  'mongodb+srv://aruna:aruna1999@cluster0.ztyxqcg.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Db Connection Stablish`))
  .catch(() => console.log(`Db Connection fail`));

app.use(cors());
app.use(express.json());

app.get('/customers', (req, res) => {
    Customer.find()
    .then(data =>{
        return res.status(200).send({data:data})
    })
    .catch(err => {
        return res.status(401).send({err:err})
    })
});

app.listen(8001, () => {
  console.log('Server starte port 8001');
});
