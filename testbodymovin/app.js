const express = require('express');
var app=express()
var request=require('request')
var path=require('path')
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/Views/demo.html'));
});
app.listen(5000, () => {
    console.log(`Server started on 5000`);
});