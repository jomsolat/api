require('dotenv').config()

const express = require("express");
const helmet = require("helmet");
const app = express();
const port = process.env.APP_PORT;

app.use(helmet());

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

app.get('/zone/:zoneId', async function (req, res) {
  let zone = req.params.zoneId;

  const todaysDate = new Date();
  const date = todaysDate.toISOString().split('T')[0];

  await client.connect();
  const db = client.db('jomsolat');
  const prayerTime = db.collection('prayertime2');
  
  prayerTime.findOne({zone: zone, date: date}, function(err, result) {
    if (err) throw err;
    if (typeof result == 'undefined') result = "No result";
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`JomSolat API listening at http://localhost:${port}`);
});