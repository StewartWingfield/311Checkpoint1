const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json())

const usersRoute = require('./routes/users')


app.use('/users', usersRoute)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log('app is listening on:', port)
})