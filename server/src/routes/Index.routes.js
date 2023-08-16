const adminRouter = require('./Admin.routes')
const homeRouter = require('./Home.routes')

function route(app) {
    app.use('/', adminRouter)
    app.use('/', homeRouter)
}

module.exports = route