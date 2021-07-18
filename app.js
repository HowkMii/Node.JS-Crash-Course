const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
//   res.send('Hello World')
res.sendFile('./views/index.html',{root: __dirname});
});
 
app.get('/about', function (req, res) {
    // res.send('about')
    res.sendFile('./views/about.html',{root: __dirname});
  });
app.get('/404', function (req, res) {
    // res.send('about')
    res.sendFile('./views/404.html',{root: __dirname});
  });
app.listen(3000);