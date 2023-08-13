
const conn = require('../../configs/database')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const mailer = require('../../utils/Mailer.util')
const ejs = require('ejs')
const path = require('path')
const QRCode = require("qrcode")

async function index(req, res, next) {
    conn.query("SELECT * FROM users ORDER BY id DESC", function(err, data) {
        if (err) console.log(err)
        res.render('admin/users/list', {users: data, layout: 'layouts/admin'})
    })

}

async function create(req, res, next) {
    res.render('admin/users/create', { layout: 'layouts/admin'})
}

async function store(req, res, next) {
    const uuid = uuidv4()
    const name = req.body.full_name
    const phone = req.body.phone
    const email = req.body.email
    const urlFacebook = req.body.url_facebook
    const role = req.body.role
    const inputPassword  = req.body.password
    const password = bcrypt.hashSync(inputPassword, salt)
    const status = 0
    const checkin_status = 0

    const values = [uuid,name, phone, email, urlFacebook, role, password, status, checkin_status]

    conn.query("INSERT INTO users (uuid,name,phone,email,url_facebook,role,password,status,checkin_status) VALUES (?)",
        [values],
        function(err, data, fields) {
            if (err) {
                console.log(err)
            } else {
                let emailTemplate;
                QRCode.toDataURL(`{uuid: ${uuid}}`, function (err, data) {
                    if (err) console.log(err)
                    ejs.renderFile(path.join(__dirname, 'email.ejs'), {name:name, image:data}).then((result) => {
                        emailTemplate = result
                        mailer.sendMail(email,'vCheckin | Đăng ký thành viên', emailTemplate)
                        res.redirect('/admin/users')
                    })
                })
            }

        })
}

module.exports = {
    index,
    create,
    store
}