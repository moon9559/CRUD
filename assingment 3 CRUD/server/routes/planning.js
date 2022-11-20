let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const planning = require('../models/planning');


// connect with the model of your collection(planning)

let Plan = require('../models/planning'); 

/* read */
/* get route for planner list */

router.get('/',(req,res,next)=>{ //get information from server
    Plan.find((err, Plans)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('planning/table', {
                title:'Planner', 
                plans: Plans 
            }) 
        }
    })
});

module.exports=router; //share file

// add operation//
router.get('/add',(req,res,next)=>{ //use get to display page
    res.render('planning/add',{title:'Add new event'})

});

router.post('/add',(req,res,next)=>{ //using post to process add operation
    let newPlan = planning ({
         "Title":req.body.Title,
         "Note":req.body.Note,
         "Date":req.body.Date,
         "Time":req.body.Time,
         "Place":req.body.Place,
    });
    planning.create(newPlan,(err,plan)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/planner');
        }
    })
});

//edit operation//
router.get('/edit/:id',( req, res, next) => {
    let id = req.params.id;
    planning.findById(id,(err,planningToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('/planner',{title:'Edit Plan', planning:planningToEdit});
        }
    });
});

// post router for proccessing edit page
router.post('/edit/:id',( req,res,next) => {
    let id = req.params.id;
    let updatePlan = planning ({
        "Title":req.body.Title,
         "Note":req.body.Note,
         "Date":req.body.Date,
         "Time":req.body.Time,
         "Place":req.body.Place
    });
    planning.updateOne({_id:id},updatePlan,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/planner');
        }
    });
});


//delete operation//
router.get('/delete/:id',(req,res,next) => { 
    let id =req.params.id;
    planning.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/planner');
        }
    });
});

module.exports=router;
