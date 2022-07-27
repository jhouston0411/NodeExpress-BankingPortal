const fs  = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

 const accountData =  fs.readFileSync(path.join(__dirname, 'accounts.json'), 'utf8');
 const accounts = JSON.parse(accountData);



app.get('/', (req, res) => {
    res.render('index', {title: 'index'})
})

app.listen(PORT, () =>{
    console.log("Running on port:", PORT)
})

