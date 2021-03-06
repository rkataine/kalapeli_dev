var express = require('express')
var app = express()



app.set('view engine', 'pug')
app.set('views', __dirname + '/views');
//app.use(express.static(__dirname, 'public'));
app.use(express.static('public'))
app.use(express.static('styles'))
app.use(express.static('destination'))
app.use(express.static('scripts'))

app.get('/', function (req, res){
  res.render('index')
})

app.get('/gamepage', function(req, res){
  res.render('game', {
    title: 'Home'
  });
});

app.get('/testpage', function(req, res){
  res.render('testpage', {
    title: 'Demo'
  });
});

app.listen(8080, function () {
  console.log('Kalapeli running on port 8080!')
})
