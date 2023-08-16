

async function index(req, res, next) {
    res.render('home/index', { layout: 'layouts/home'})
}


module.exports = {
    index
}