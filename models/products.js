var mongoose = require('mongoose');
var Schema = mongoose.Schema;
productsSchema = new mongoose.Schema({
    ad:String
});

mongoose.model("products",productsSchema);