require('dotenv').config()

const { sequelize, models } = require('./models/index')
const express = require('express');
const app = express();
const cors = require('cors')

console.log(sequelize, 2)

app.use(cors()); //can put url into the cors()
app.use(express.json());

app.set('port', process.env.PORT || 3002);
app.locals.title = 'TasteRX API';

app.get('/', (request, response) => {
  response.send('TasteRX API');
});

app.locals.counter = 1;
app.locals.prescriptions = [];

app.post("/prescriptions", (request, response) => {
  //.create() sequelize docs
  const { message, showID } = request.body
  if(!message || !showID) {
    response.status(422).json( { error: "Expected { message: <String>, showID: <Number>}" } )
  }
  
  const newPrescription = {
    id: app.locals.counter,
    message: message,
    showID: showID
  }
  app.locals.counter ++
  
  app.locals.prescriptions.push(newPrescription)
  response.status(201).json({ prescription: newPrescription})
})

app.get('/prescriptions/:id', (request, response) => {
  // .findOne() sequelize docs
  const { id } = request.params
  
  const requestedPrescription = app.locals.prescriptions.find( (prescription) => {
    return prescription.id == id;
  } )

  response.status(201).json({prescription: requestedPrescription});
});

sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${process.env.PORT}.`);
  });
});


