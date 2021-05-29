
const component = require('../../build/dist/CounterServer').component
var fs = require('fs');
const Counter = require("../../build/dist/Counter").default
const render = require('../../build/dist/CounterServer').render
var path = require('path');


let counterString = component();

module.exports = (req,res,params) => {
  
    fs.readFile(__dirname + '/../../build/index.html', function(err, data) { 
    
        err ? res.end(JSON.stringify(err)) : res.end(data.toString().replace("{{homepage}}", counterString));
        
      });

      
}