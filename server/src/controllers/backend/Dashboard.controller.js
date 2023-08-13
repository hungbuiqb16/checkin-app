

async function index(req, res) {
    res.render('admin', {layout: 'layouts/admin'})
}

module.exports = {
    index
}