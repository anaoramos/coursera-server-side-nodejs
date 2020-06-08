const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();


dishRouter.route('/') //espec. o endpoint
// o app.all vai trabalhar no endpoint que especifiquei acima
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();    //o next faz ir para os proximos get/post

}) //1º param é endpoint; 2º callback function
.get((req,res,next)=>{
   res.end('Will send all the dishes to you!');
})
.post((req,res,next)=>{
   res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403; //403 means operation not supported
   res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next)=>{
   res.end('Deleting all the dishes!');
});
//ATENCAO TIREI O ;

dishRouter.route('/:dishId') //espec. o endpoint
// o app.all vai trabalhar no endpoint que especifiquei acima
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();    //o next faz ir para os proximos get/post

}) //1º param é endpoint; 2º callback function
.get((req,res,next)=>{
   res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
})
.post((req,res,next)=>{
   res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.put((req,res,next)=>{
    res.statusCode = 403; //403 means operation not supported
   res.end('Updating the dish: ' + req.body.name + 
   '\nWill update the dish: ' + req.body.name + ' with details: ' + req.body.description );
})
.delete((req,res,next)=>{
   res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;

