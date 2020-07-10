// Iteration #1
require('../config/db.config')

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

const celebrities = [
  { name: 'Nelson Mandela', occupation: 'Lawyer', catchPhrase: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
  { name: 'Walt Disney', occupation: 'Film director', catchPhrase: 'The way to get started is to quit talking and begin doing.' },
  { name: 'Steve Jobs', occupation: 'Businessman', catchPhrase: 'Your time is limited, so don´t waste it living someone else´s life. Don´t be trapped by dogma – which is living with the results of other people´s thinking' }
];
const movies = [
  { title: 'Calla que me parto', genre: 'Comedy', plot: 'Lorem fistrum apetecan fistro ese hombree. Condemor llevame al sircoo fistro ese que llega. Quietooor me cago en tus muelas me cago en tus muelas pecador no puedor a wan ese hombree quietooor se calle ustée de la pradera pupita. De la pradera va usté muy cargadoo torpedo no puedor quietooor va usté muy cargadoo.' },
  { title: 'No llores', genre: 'Drama', plot: 'TNo te digo trigo por no llamarte Rodrigor ese hombree mamaar benemeritaar jarl qué dise usteer jarl amatomaa llevame al sircoo benemeritaar a peich. Hasta luego Lucas jarl se calle ustée a gramenawer torpedo está la cosa muy malar jarl pupita condemor.' },
  { title: 'IT', genre: 'Therror', plot: 'Pecador caballo blanco caballo negroorl te va a hasé pupitaa amatomaa pecador a peich ese que llega la caidita jarl te voy a borrar el cerito.' }
];

Celebrity.deleteMany({})
  .then(Celebrity.insertMany(celebrities))
  .then(() => {
    console.log('Celebrities created registers correctly ')
    Movie.deleteMany({})
    .then(Movie.insertMany(movies))
    .then(() => {
      console.log('Movies created registers correctly ')
      mongoose.connection.close()
    })
    .catch((err) => console.log(err))
  })
  .catch((err) => console.log(err))