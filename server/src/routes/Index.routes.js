const adminRouter = require('./Admin.routes')

function route(app) {
    app.use('/', adminRouter)
}

module.exports = route