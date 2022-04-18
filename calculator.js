//EXPRESS
const express = require('express');
const app = express();
const port = 3000;

//BODY PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//Routes for Calculator
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    console.log(req.body) //info in terminal

    const number1 = Number(req.body.num1);
    const number2 = Number(req.body.num2);
    const result = number1 + number2;

    res.send("The result is: " + result);
});

//Routes for Calculator BMI
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html')
});

app.post('/bmicalculator', (req, res) => {

    const weight = parseFloat(req.body.w);
    const height = parseFloat(req.body.h);
    const result = weight / (height * height);
    res.send("Your BMI is: " + result);
});

// --------------------------------------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});