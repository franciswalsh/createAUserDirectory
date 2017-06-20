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

  // res.render('index', {userName: data.users[0].username});

  res.render('index', { users: data.users

                      //  id: data.users[0].id,
                      //  username: data.users[0].username,
                      //  name: data.users[0].name,
                      //  avatar: data.users[0].avatar,
                      //  email: data.users[0].email,
                      //  university: data.users[0].university,
                      //  job: data.users[0].job,
                      //  company: data.users[0].company,
                      //  skills: data.users[0].skills,
                      //  phone: data.users[0].phone,
                      //  address: data.users[0].address
                     }
              );


});
