const mongoose = require('mongoose');

mongoose
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Db Connection Stablish`))
  .catch(() => console.log(`Db Connection fail`));
