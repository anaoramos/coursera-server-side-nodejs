const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();


promoRouter.route('/') //espec. o endpoint
// o app.all vai trabalhar no endpoint que especifiquei acima
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();    //o next faz ir para os proximos get/post

}) //1º param é endpoint; 2º callback function
.get((req,res,next)=>{
   res.end('Will send all the promotions to you!');
})
.post((req,res,next)=>{
   res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403; //403 means operation not supported
   res.end('PUT operation not supported on /promotions');
})
.delete((req,res,next)=>{
   res.end('Deleting all the promotions!');
});
//ATENCAO TIREI O ;

promoRouter.route('/:promoId') //espec. o endpoint
// o app.all vai trabalhar no endpoint que especifiquei acima
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();    //o next faz ir para os proximos get/post

}) //1º param é endpoint; 2º callback function
.get((req,res,next)=>{
   res.end('Will send details of the promoId: ' + req.params.promoId +' to you!');
})
.post((req,res,next)=>{
   res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put((req,res,next)=>{
    res.statusCode = 403; //403 means operation not supported
   res.end('Updating the promotion: ' + req.params.promoId + 
   '\nWill update the promotion: ' + req.body.name + ' with details: ' + req.body.description );
})
.delete((req,res,next)=>{
   res.end('Deleting promotion: ' + req.params.promoId);
});

module.exports = promoRouter;

