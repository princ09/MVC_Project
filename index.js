var express = require('express');
var pug = require('pug');
app  = express();
var homepage = require('./homepage'),
    developersLanding = require('./developers-landing'),
    developersDetail = require('./developers-detail');
app.set('views' , '.')
app.set('view engine', 'pug');
app.get('/',function(req , res){
    res.redirect('/developers')
})
app.get('/developers', developersLanding.controller );
app.get('/developers/:developerID', developersDetail.controller);

app.listen(3000 , function(){
    console.log("Web App Ready at Port 3000");
});

