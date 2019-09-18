var cors = require('cors')
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Dish = require('./api/models/menuModel') //created model loading here
  bodyParser = require('body-parser');

var uristring = 
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/Menudb';

app.use(cors());
  // mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(uristring, function (err, res){
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
      console.log ('Succeeded connected to: ' + uristring);
    }
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/menuRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('Menu RESTful API server started on: ' + port);