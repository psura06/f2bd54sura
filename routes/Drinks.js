var express = require('express');
const Drinks_controlers= require('../controllers/Drinks');
var router = express.Router();

/* GET Drinks */

router.get('/', Drinks_controlers.Drinks_view_all_Page );

/* GET detail Drinks page */ 
router.get('/detail', Drinks_controlers.Drinks_view_one_Page);

/* GET create Drinks page */ 
router.get('/create', Drinks_controlers.Drinks_create_Page); 

/* GET create update page */ 
router.get('/update', Drinks_controlers.Drinks_update_Page); 

/* GET delete DrinKS page */ 
router.get('/delete', Drinks_controlers.Drinks_delete_Page); 

module.exports = router;