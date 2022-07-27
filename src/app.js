const fs  = require('fs');
const path = require('path');
const express = require('express');


const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

 const accountData =  fs.readFileSync('src/json/accounts.json', 'utf8');
 const accounts = JSON.parse(accountData);

 const userData =  fs.readFileSync('src/json/users.json', 'utf8');
 const users = JSON.parse(userData);



app.get('/', (req, res) => {
    res.render('index', {title: 'Account Summary', accounts: 'accounts'})
})

app.listen(3000, () =>{
    console.log("Running on port:", 3000)
})

