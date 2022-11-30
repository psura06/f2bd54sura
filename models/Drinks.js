const mongoose = require("mongoose") 
const DrinksSchema = mongoose.Schema({ 
    drink_Name: {type: String,required: [true, 'Drinks Name cannot be empty']},

    shop: {type: String,required: [true, ' Drinks shop name cannot be empty']},

    price: {type: Number,required: [true, 'Drinks price cannot be empty']}

}) 

module.exports = mongoose.model("Drinks", DrinksSchema) 
