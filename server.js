
const MongoClient = require('mongodb').MongoClient
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
app.set('view engine', 'ejs')
//res.render(view, locals)
app.use(bodyParser.urlencoded({extended: true}))
app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})
var db

MongoClient.connect('mongodb://mongodb:mongodb12@ds121332.mlab.com:21332/devops4solutions', (err, client) => {
  if (err) return console.log(err)
  db = client.db('devops4solutions') // whatever your database name is
app.listen(3000, function() {
  console.log('listening on 3000')
})
})
