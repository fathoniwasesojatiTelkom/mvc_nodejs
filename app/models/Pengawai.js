/**
* Index a newly created resource in storage.
*
* @table this table is like model schema you can register model in here
* @fillable fillable is like collections such as name, etc
*/

const mongoose = require("mongoose")
const schema = mongoose.Schema
const Pengguna = new schema({
    name:{
        type : String,
        required: 'nama harus di isi dengan benar'
    },
    email:{
        type : String,
        required: 'email harus di isi dengan benar',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'email harus valid @']
    },
    nip:{
        type : Number,
        required: 'nip harus di isi dengan benar'
    },
    alamat:{
        type : String,
        required: 'alamat harus di isi dengan benar'
    },
    provinsi:{
        type : String,
        required: 'provinsi harus di isi dengan benar'
    },

    berat:{
        type : Number,
        required: 'berat harus di isi dengan benar'
    },
    tinggi:{
        type : Number,
        required: 'tinggi harus di isi dengan benar'
    },

},{ timestamps: true})
module.exports = mongoose.model('PegawaiKantor', Pengguna)
