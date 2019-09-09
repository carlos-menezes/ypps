const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const uniqid = require('uniqid');

const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.connect(mongodb.uri, { useNewUrlParser: true, dbName: 'pastes' }, () => {
  console.log('🔐 Connected to MongoDB.');
});

const Paste = require('./models/Paste');

const SERVER_PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/paste', (req, res) => {
  const { pasteTitle, pasteText, pasteSyntax } = req.body;
  let pasteID = uniqid();

  const pasteData = new Paste({
    pasteID,
    pasteTitle,
    pasteText,
    pasteSyntax,
    pasteViews: 0
  })
  
  pasteData.save();
  
  return res.json(pasteData);
})

app.get('/api/:pasteId', (req, res) => {
  const pId = req.params.pasteId;

  Paste.findOne({ pasteID: pId})
    .then((data) => {
      Paste.update({pasteID : data.pasteID },{$set : { pasteViews: data.pasteViews + 1 }}).then((data) => console.log(data));
      return res.json(data);
    })
    .catch((err) => {
      return res.json(err);
    })
})

app.listen(SERVER_PORT, () => console.log(`🚀 Express server started on port ${SERVER_PORT}.`));

