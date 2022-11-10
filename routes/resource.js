var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Drinks_controller = require('../controllers/Drinks'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Drinks ROUTES /// 
 
// POST request for creating a Drinks.  
router.post('/Drinks', Drinks_controller.Drinks_create_post); 
 
// DELETE request to delete Drinks. 
router.delete('/Drinks/:id', Drinks_controller.Drinks_delete); 
 
// PUT request to update Drinks. 
router.put('/Drinks/:id', Drinks_controller.Drinks_update_put); 
 
// GET request for one Drinks. 
router.get('/Drinks/:id', Drinks_controller.Drinks_detail); 
 
// GET request for list of all Drinks items. 
router.get('/Drinks', Drinks_controller.Drinks_list); 
 
module.exports = router; 