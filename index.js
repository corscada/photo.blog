const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');
const { getServerConfig } = require('./tools/config');
const { getImageData } = require('./controllers/galleryController');

app.use(express.static('public')); 

// view engine setup
app.engine('hbs', hbs.engine({
  extname: 'hbs',
  defaultLayout: 'default',
  layoutsDir: `${__dirname}/views/layouts/`,
  partialsDir: `${__dirname}/views/partials/`,
}));
app.set('view engine', 'hbs');

const config = getServerConfig();
const images = getImageData(config.gallery);

app.get('/', (req, res) => {
  res.render('gallery', { 
    layout: 'default',
    config,
    images,
  });
})

app.get('/:photo' , (req, res) =>{
  res.render('photo', {
    layout: 'default',
    config,
    image: images.find(image => image.url === req.params.photo),
  });
})

app.listen(3000)
