const turbo = require("turbo-http")
const fs = require('fs')

const router = require('anumargak')({
  defaultRoute : (req,res) => { res.end("404") },
  ignoreTrailingSlash: true,
  ignoreLeadingSlash: true,
  allowUnsafeRegex: false,
})

router.on('GET', '/test2', (req, res, params) => {
   require("./controllers/homeController")(req, res, params)
})

router.on('GET','/test', (req,res,params) => {
require('./controllers/testController')(req,res,params);
})


 //router on get all js files -> serve js files
router.on('GET','/*.js',(req,res,params) => {
  res.setHeader('Content-Type', 'text/javascript')

  fs.readFile(__dirname + '/../build/app.js', function(err, data) { 
    
    err ? res.end(JSON.stringify(err)) : res.end(data);
    
  });


})


const server = turbo.createServer( (req, res) => {
  req.headers = {};
  req.headers['accept-version'] = req.getHeader('accept-version');
  router.lookup(req,res);
})

server.listen(4000)