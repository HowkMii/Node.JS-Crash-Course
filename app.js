const express = require('express');
const app = express();
//register view engine 
app.set('view engine','ejs');

 
app.get('/', function (req, res) {
//   res.send('Hello World')
res.render('index')
});
 
app.get('/about', function (req, res) {
    // res.send('about')
    res.sendFile('./views/about.html',{root: __dirname});
  });
app.get('/about-us', function (req, res) {
    // res.send('about')
    res.redirect('./about');
  });
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root: __dirname})
})
app.listen(3000);