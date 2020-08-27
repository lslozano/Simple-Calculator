const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
const index = "/index.html";
const bmiCalculator = "/bmiCalculator.html";

app.get("/", (req, res) => res.sendFile(`${__dirname}${index}`));

app.post("/", (req, res) => {
  const number1 = Number(req.body.num1);
  const number2 = Number(req.body.num2);

  const result = number1 + number2;

  res.send(`The result of the calculation is: ${result}`);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(`${__dirname}${bmiCalculator}`);
});

app.post("/bmiCalculator", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  const bmi = weight / (height * height);

  res.send(`Your BMI is ${bmi}`);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
});