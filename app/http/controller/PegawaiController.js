/*
|--------------------------------------------------------------------------
| required component from models
|--------------------------------------------------------------------------
|
| this models will be define by require function to given more structure
| and integrating controller to good template structure MVC
|
*/
const {check, validationResult} = require('express-validator')
const { render } = require("ejs");
const Pegawai = require("../../models/Pengawai")

    /**
     * Index a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const index = (req, res)=>{
    Pegawai
    .find()
    .then((result) => {
        res.render("index", {data: result, success:req.session.success, errors: req.session.errors});
        req.session.errors = null
        req.session.success = null
    })
}

    /**
     * Show a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const show = (req, res)=>{
    res.render("create",)
}
    /**
     * Create a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const create = (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const alert = errors.array()
        res.render('create', {alert:alert})
        req.session.errors = true
        req.session.success = false
    }else{
        const Create = new Pegawai(req.body)
        Create.save(function(err){
            if (err) throw err;
            req.session.success = true,
            res.redirect('/')
            req.session.success = null
        })
    }

}

    /**
     * Update a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const update = (req, res)=>{
    Pegawai.findByIdAndUpdate({_id:req.body._id}, req.body, {new:true}, (err, doc)=>{
        if(!err){
            res.redirect('/')
        }
    })
}
    /**
     * Edit a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const edit = (req, res)=>{
    const id = req.params.id
    Pegawai.findById(id, (err, doc)=>{
        res.render('update', {data:doc})
    })
}

    /**
     * Destroy a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const destroy = (req, res)=>{

    const id = req.params.id
    Pegawai.findByIdAndRemove(id, function(err,doc){
        if(!err){
            res.redirect('/')
        }
        else{
            res.redirect('/')
        }
    })
}

    /**
     * Create modules export to giving access to routes \routes\web.js
     *
     * @modExp  \this\is\modules\to\web\routes
     */
module.exports = {
    index,
    show,
    create,
    update,
    edit,
    destroy
}
