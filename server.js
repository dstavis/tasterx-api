const express = require('express');
const app = express();
const cors = require('cors')

// const movieData = require("./movieData.json")  

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3002);
app.locals.title = 'TasteRX API';

app.get('/', (request, response) => {
  response.send('TasteRX API');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.locals.counter = 1;
app.locals.prescriptions = [];

app.post("/prescriptions", (request, response) => {
  const { message, movieID } = request.body
  if(!message || !movieID) {
    response.status(422).json( { error: "Expected { message: <String>, movieID: <Number>}" } )
  }

  const newPrescription = {
    id: app.locals.counter,
    message: message,
    movieID: movieID
  }
  app.locals.counter ++

  app.locals.prescriptions.push(newPrescription)
  response.status(201).json({ prescription: newPrescription})
})

app.get('/prescriptions/:id', (request, response) => {
    // const prescriptions = app.locals.prescriptions;
    // response.status(200).json(prescriptions);
  });

