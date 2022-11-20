let mongoose = require('mongoose');
//create a book model
let planModel = mongoose.Schema({ 
    Title: String,
    Note: String,
    Date: String,
    Time: String,
    Place: String
    },
    {
        collection:"planner" 
    }


);

module.exports = mongoose.model('Plan', planModel); 