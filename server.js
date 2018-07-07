const express = require('express');
const fs = require('fs');
const proxy = require('http-proxy-middleware');

const app = express();
//running the app by serving the static files
//from dist folder
app.use(express.static(__dirname + '/dist'));

// Add middleware for http proxying 
const DEVELOPMENT_BACKEND_SERVER = 'http://10.98.4.122:8080';

const LOCAL_BACKEND_SERVER = 'http://localhost:8080';

//app.use('/mppkvvcl/nextgenbilling/', proxy({target: '', changeOrigin: true}));
app.use('/mppkvvcl/nextgenbilling/', proxy({
  target: process.env.PRODUCTION_BACKEND_SERVER || DEVELOPMENT_BACKEND_SERVER,
  xfwd:true
}));

const LOCAL_TRANSLATE_SERVER = 'http://localhost:8090';
console.log("using translate server as " + (process.env.TRANSLATE_SERVER || LOCAL_TRANSLATE_SERVER));
app.use('/translate/', proxy({
  target: process.env.TRANSLATE_SERVER || LOCAL_TRANSLATE_SERVER,
  pathRewrite: {
      "^/translate" : "/"
    }
}));

const MIS_SERVER = 'http://10.98.4.165:8080';
console.log("using mis server as " + (process.env.MIS_SERVER || MIS_SERVER));
app.use('/mppkvvcl/ngb/report/', proxy({
  target: process.env.MIS_SERVER || MIS_SERVER,
  xfwd:true
}));

//for local testing
//app.use('/mppkvvcl/nextgenbilling/', proxy({target: LOCAL_BACKEND_SERVER, changeOrigin: true}));

const path = require('path');
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  console.log("Server request on process Id " + process.pid);
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var key = fs.readFileSync('ssl/privatekey.pem');
var cert = fs.readFileSync( 'ssl/ngbmpwincoin.pem' );

var sslOptions = {
  key: key,
  cert: cert
};

console.log("Requiring https ");
var https = require('https');
var httpsServer = https.createServer(sslOptions, app);
console.log("Created https server");

console.log("Starting Node Server with ngb admin application");

let port = 4201;

httpsServer.listen(port, () => {
    if(process.env.PRODUCTION_BACKEND_SERVER){
      console.log("using production backend server as " + process.env.PRODUCTION_BACKEND_SERVER );
    }else if(DEVELOPMENT_BACKEND_SERVER){
      console.log("using development backend server as " + DEVELOPMENT_BACKEND_SERVER);
    }else {
      console.log("Unknown Backend Server url");
    }
    console.log("Started NGB ADMIN Server at port " + port + " with process Id " + process.pid);
});
