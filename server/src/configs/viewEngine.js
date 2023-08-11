const express = require('express')

const viewEngine = (app) => {
    app.set('view engine', 'ejs')
    app.set('views', './src/views')
    app.use(express.static('src/assets'))
}

module.exports = viewEngine