require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { sequelize, models } = require('./model/index');

app.use(cors()); //can put url into the cors()
app.use(express.json());

app.set('port', process.env.PORT || 3002);
app.locals.title = 'TasteRX API';

app.get('/', (request, response) => {
  response.send('TasteRX API');
});

app.post("/prescriptions", async (request, response) => {
  const { message, showID } = request.body
  if(!message || !showID) {
    response.status(422).json( { error: "Expected { message: <String>, showID: <Number> }" } )
  }
  const newPrescription = await models.TVPrescription.create({ message: message, showID: showID })
  response.status(201).json({ prescription: newPrescription })
})

app.get('/prescriptions/:id', async (request, response) => {
    const { id } = request.params

    const requestedPrescription = await models.TVPrescription.findOne({ where: { id: id } });
    if (requestedPrescription === null) {
      response.status(422).json( { error: "Not found" } )
    } else {
      response.status(201).json({data: requestedPrescription});
    }
  });

sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
  });
})
