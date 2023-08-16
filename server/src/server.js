// importing the dependencies
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const viewEngine = require('../src/configs/viewEngine')
const expressLayouts = require('express-ejs-layouts')
const route = require('../src/routes/Index.routes')
const connectDb                = require('../src/configs/database')

// define the Express app
const app = express()
// adding morgan to log HTTP request
app.use(morgan('combined'))

// setup for body-parser module
// create application/json parser
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// view engine setup
viewEngine(app)
app.use(expressLayouts)
// init route
route(app)

app.listen(7000, () => console.log(`This app is running on port 7000`))