const fs  = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { ap } = require('ramda');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');


const app = express();

app.use('./account', accountRoutes);
app.use('./services', servicesRoutes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
const {accounts, users, writeJSON} = require('./data');

app.get('/', (req, res) => {
    res.render('index', {title: 'Account Summary', accounts: accounts})
})


app.get('/profile', (req, res) =>{
    res.render('profile', {user: users[0]})
})

app.listen(3000, () =>{
    console.log("Running on port:", 3000)
})

