var Drinks = require('../models/Drinks'); 
 
// List of all Drinks
exports.costume_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Drinks list'); 
}; 
 
// for a specific Drinks. 
exports.Drinks_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Drinks detail: ' + req.params.id); 
}; 
 
// Handle Drinks create on POST. 
exports.Drinks_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Drinks(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"drink_Name": "Dr.pepper","shop": "Walmart","price": 1.29} 
    document.drink_Name = req.body.drink_Name; 
    document.shop = req.body.shop; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Drinks delete form on DELETE. 
exports.Drinks_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Drinks delete DELETE ' + req.params.id); 
}; 
 
// Handle Drinks update form on PUT. 
exports.Drinks_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Drinks update PUT' + req.params.id); 
}; 
// List of all Drinks 
exports.Drinks_list = async function(req, res) { 
    try{ 
        theDrinks = await Drinks.find(); 
        res.send(theDrinks); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// VIEWS 
// Handle a show all view 
exports.Drinks_view_all_Page = async function(req, res) { 
    try{ 
        theDrinks = await Drinks.find(); 
        res.render('Drinks', { title: 'Drinks Search Results', results: theDrinks }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 