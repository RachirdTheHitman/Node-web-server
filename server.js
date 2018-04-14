const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name: 'Richard',
  //   likes: [
  //     'Gaming',
  //     'Cities'
  //   ]
  // });
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMsg: 'Welcome to visit!'
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

// /bad
app.get('/bad', (req, res) => {
  res.send({
    warning: 'bad things happend',
    causes: [
      'unknown',
      'not clear'
    ]
  });
})

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
