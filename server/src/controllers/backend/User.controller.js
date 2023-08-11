

async function index(req, res, next) {
    res.render('admin/users/list')
}

async function create(req, res, next) {
    res.render('admin/users/create', { layout: 'layouts/admin'})
}

async function store(req, res, next) {
    console.log(req.body.full_name)
}

module.exports = {
    index,
    create,
    store
}