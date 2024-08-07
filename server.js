const express = require(`express`)
const app = express();

app.get(`/`, (req,res) => {
  res.send(
    `<h1>Welcome!<h1>`
  )
});

app.get(`/api/v1/employees`, (req,res) => {
  res.send(
    `<h1>Employees<h1>`
  )
})

app.listen(8080);