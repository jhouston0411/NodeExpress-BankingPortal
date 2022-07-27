const path = require('path');
const fs = require('fs');

const accountData =  fs.readFileSync('src/json/accounts.json', 'utf8');
const accounts = JSON.parse(accountData);

const userData =  fs.readFileSync('src/json/users.json', 'utf8');
const users = JSON.parse(userData);