// Iteration #1
require('../config/db.config')

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

const celebrities = [
  { name: 'Nelson Mandela', occupation: 'Lawyer', catchPhrase: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
  { name: 'Walt Disney', occupation: 'Film director', catchPhrase: 'The way to get started is to quit talking and begin doing.' },
  { name: 'Steve Jobs', occupation: 'Businessman', catchPhrase: 'Your time is limited, so don´t waste it living someone else´s life. Don´t be trapped by dogma – which is living with the results of other people´s thinking' }
];

Celebrity.deleteMany({})
  .then(Celebrity.insertMany(celebrities))
  .then(() => {
    console.log('Created registers correctly')
    mongoose.connection.close()
  })
  .catch((err) => console.log(err))