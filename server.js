require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { sequelize, models } = require('./model/index');
const { response } = require('express');

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3002);
app.locals.title = 'TasteRX API';

app.get('/', (request, response) => {
  response.send('TasteRX API');
});

app.get('/prescriptions', async (request, response) => {
  const allRX = await models.TVPrescription.findAll();
  if(!allRX) {
    response.status(422).json( { error: "No prescriptions found" } )
  } else {
    response.status(200).json(allRX);
  }
});

app.post("/prescriptions", async (request, response) => {
  const { message, signature, showID } = request.body
  if(!message || !showID || !signature) {
    response.status(422).json( { error: "Expected { message: <String>, signature: <String>, showID: <Number> }" } )
  } else {
    const newPrescription = await models.TVPrescription.create({ message: message, signature: signature, showID: showID })
    response.status(201).json({ prescription: newPrescription })
  }
})

app.get('/prescriptions/:id', async (request, response) => {
    const { id } = request.params
    const requestedPrescription = await models.TVPrescription.findOne({ where: { id: id } });
    if (requestedPrescription === null) {
      response.status(422).json( { error: "Prescription with the given ID was not found" } )
    } else {
      response.status(200).json({ prescription: requestedPrescription });
    }
  });


sequelize.authenticate().then(() => {
  sequelize.sync()
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on Port ${app.get('port')}.`);
  });
})
