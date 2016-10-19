var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cheeseSchema = new Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    tags: String,
    imageURL: String,
})
    
    
module.exports = mongoose.model('Cheese,' cheeseSchema) 

module.exports = Cheese;  