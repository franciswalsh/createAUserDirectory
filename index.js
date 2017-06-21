const data = require('./data.js')
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.listen(3000, function(){
  console.log("Succesfully started mustache express application!");
});

app.get('/', function(req, res){
  res.render('index', { users: data.users});
});

app.get('/:username', function(req, res){

  let selectedUser = req.params.username;

  for(let i = 0; i < data.users.length; i++){
    if (data.users[i].username === selectedUser){
      console.log("you did it");
      res.render('users', { users: data.users[i]});
    }
  }
});
