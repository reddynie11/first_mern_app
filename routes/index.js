const express = require('express');
const router = express.Router();

//import model
const Index_m = require('../models/index');

router.get('/', (req,res)=>{
    res.render('index');
});

router.post('/', (req,res)=>{
    const fdata = new Index_m();
    fdata.fname = req.body.fullname;
    fdata.email = req.body.email;
    fdata.address = req.body.add;
    fdata.password = req.body.pwd;
    fdata.save((err)=>{
        if(err){throw err}
        else{res.send("data saved")}
    });

})




module.exports = router;