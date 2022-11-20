let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');

/* GET home page. */
//router.get('/', indexController.displayHomePage);

//router.get('/home', indexController.displayHomePage);

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home', 
    });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home', 
    });
});



// GET (method) about page
router.get('/about', indexController.displayAboutPage);

router.get('/projects',indexController.displayProjectsPage);
// GET contact page
router.get('/contact', indexController.displayProjectsPage);

module.exports = router;

/*
MVC -> MOdel view Controller
MOdel -> to connect logic
view -> pages
controller ->logic behind routes
*/