const {check, validatorResult} =require('express-validator')

const ValidResult =  ()=>{
   [check('email', 'Email Invalid Validate').isEmail(),
    check('name', 'name Invalid Validate').not().isEmpty().trim().escape(),
    check('nip','nip Invalid Validate').not().isEmpty().trim().escape(),
    check('alamat','alamat Invalid Validate').not().isEmpty().trim().escape(),
    check('provinsi','provinsi Invalid Validate').not().isEmpty().trim().escape(),
    check('berat','berat Invalid Validate').not().isEmpty().trim().escape(),
    check('tinggi','tinggi Invalid Validate').not().isEmpty().trim().escape()]
} 
module.exports = {ValidResult}