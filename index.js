'use strict';

var express = require('express');
var app = express();

var myModule = require('./sum.js');
var record = require('./record.js');

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});

// ***********************************************************

var result = record.record(myModule.sum, 1, 2);
console.log(result);

result = record.record(myModule.sum, 3, 2);
console.log(result);

result = record.record(myModule.sum, 3, 5);
console.log(result);