

async function index(req, res, next) {
    res.render('admin/users/list')
}

async function create(req, res, next) {
    res.render('admin/users/create', { layout: 'layouts/admin'})
}

async function store(req, res, next) {
    const {full_name, phone, email, urlFacebook, role, password} = req.body
    console.log(role)
}

module.exports = {
    index,
    create,
    store
}