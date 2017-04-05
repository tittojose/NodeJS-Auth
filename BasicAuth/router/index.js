const express = require('express');
const basicAuth = require('../auth/basic');
const router = express.Router();

router.get('/', basicAuth.isAuthenticated ,function(req,res){
    res.send(
        {
            name : 'Titto'
        }
    );
});

module.exports = router;