const mongoose = require("mongoose") 
const DrinksSchema = mongoose.Schema({ 
    drink_Name: String,
    shop: String,
    price: Number
}) 

module.exports = mongoose.model("Drinks", DrinksSchema) 
