const express = require('express');
const bodyParser = require('body-parser');

const leadersRouter = express.Router();


leadersRouter.route('/') //espec. o endpoint
// o app.all vai trabalhar no endpoint que especifiquei acima
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();    //o next faz ir para os proximos get/post

}) //1º param é endpoint; 2º callback function
.get((req,res,next)=>{
   res.end('Will send all the leaders to you!');
})
.post((req,res,next)=>{
   res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403; //403 means operation not supported
   res.end('PUT operation not supported on /leader');
})
.delete((req,res,next)=>{
   res.end('Deleting all the leaderstions!');
});
//ATENCAO TIREI O ;

leadersRouter.route('/:leaderId') //espec. o endpoint
// o app.all vai trabalhar no endpoint que especifiquei acima
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();    //o next faz ir para os proximos get/post

}) //1º param é endpoint; 2º callback function
.get((req,res,next)=>{
   res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
})
.post((req,res,next)=>{
   res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
})
.put((req,res,next)=>{
    res.statusCode = 403; //403 means operation not supported
   res.end('Updating the leader: ' + req.params.leaderId + 
   '\nWill update the leader: ' + req.body.name + ' with details: ' + req.body.description );
})
.delete((req,res,next)=>{
   res.end('Deleting leader: ' + req.params.leadersId);
});

module.exports = leadersRouter;

