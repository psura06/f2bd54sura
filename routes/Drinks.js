var express = require('express');
const Drinks_controlers= require('../controllers/Drinks');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET Drinks */

router.get('/', Drinks_controlers.Drinks_view_all_Page );

/* GET detail Drinks page */ 
router.get('/detail', Drinks_controlers.Drinks_view_one_Page);

/* GET create Drinks page */ 
router.get('/create',secured, Drinks_controlers.Drinks_create_Page); 

/* GET create update page */ 
router.get('/update',secured, Drinks_controlers.Drinks_update_Page); 

/* GET delete DrinKS page */ 
router.get('/delete',secured, Drinks_controlers.Drinks_delete_Page); 

module.exports = router;