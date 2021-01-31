/*
|--------------------------------------------------------------------------
| express required component describe by Express Documentation
|--------------------------------------------------------------------------
|
| Express.js, or simply Express, is a back end web application framework for Node.js,
| released as free and open-source software under the MIT License
| Express.js is very easy to implementation for MVC with asyc
|
*/

const express = require('express'),router = express.Router(),ValidatorGet = require('../app/middleware/validator')
const {check, validatorResult} =require('express-validator')

/*
|--------------------------------------------------------------------------
| Import Controller
|--------------------------------------------------------------------------
|
| In MVC have router to routing any controller in Node js and this'not 
| full routing but just web routing. you can register routing in here 
| with require that you controller maked
|
*/
PegawaiController = require('../app/http/controller/PegawaiController')
/*
|--------------------------------------------------------------------------
| Routing Express Js
|--------------------------------------------------------------------------
|
*/

router.get("/", PegawaiController.index)
router.get("/create", PegawaiController.show)
router.post('/create',[check('email', 'Email Invalid Validate').isEmail(),
    check('email', 'Email Invalid Validate').isEmail(),
    check('name', 'name Invalid Validate').not().isEmpty().trim().escape(),
    check('nip','nip Invalid Validate').not().isEmpty().trim().escape(),
    check('alamat','alamat Invalid Validate').not().isEmpty().trim().escape(),
    check('provinsi','provinsi Invalid Validate').not().isEmpty().trim().escape(),
    check('berat','berat Invalid Validate').not().isEmpty().trim().escape(),
    check('tinggi','tinggi Invalid Validate').not().isEmpty().trim().escape()], PegawaiController.create)
router.get('/delete/:id', PegawaiController.destroy )
router.get('/edit/:id', PegawaiController.edit )
router.post('/edit', PegawaiController.update)

/*
|--------------------------------------------------------------------------
| Modules Exports
|--------------------------------------------------------------------------
|
*/

module.exports = router
