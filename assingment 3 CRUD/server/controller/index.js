let express = require('express');
let router = express.Router();

/*module.exports.displayHomePage = (res,req,next)=>{
    res.render('index',{title: ' Home'});
}*/

module.exports.displayAboutPage = (req,res,next) =>{
    res.render('index',{ title: "About"});
}

module.exports.displayProjectsPage = (req,res,next) =>{
    res.render('index',{ title: "Projects"});
}

module.exports.dislayContactPage = (req,res,next) =>{
    res.render('index',{ title: "Contact"});
}