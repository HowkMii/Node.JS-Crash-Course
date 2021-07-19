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
    res.render('About')
  });
app.get('/about-us', function (req, res) {
    // res.send('about')
    res.redirect('./about');
  });
app.use((req,res)=>{
    res.status(404).render('404');
})
app.listen(3000);