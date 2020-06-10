const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Dishes = require('../models/dishes');

const dishRouter = express.Router();



dishRouter.route('/') //espec. o endpoint
// o app.all vai trabalhar no endpoint que especifiquei acima
.get((req,res,next)=>{
   Dishes.find({})
   .then((dishes) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dishes); //json to send back to client
   }, (err) => next(err))
   .catch((err) => next(err));
})
.post((req, res, next)=>{
   Dishes.create(req.body)
   .then((dish) => {
      console.log('Dish Created', dish);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dish);
   }, (err) => next(err));
})
.put((req,res,next)=>{
    res.statusCode = 403; //403 means operation not supported
   res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next)=>{
   Dishes.remove({})
   .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
   }, (err) => next(err));
});
//ATENCAO TIREI O ;

dishRouter.route('/:dishId') //espec. o endpoint

.get((req,res,next)=>{
   Dishes.findById(req.params.dishId)
   .then((dish) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dish); //json to send back to client
   }, (err) => next(err))
   .catch((err) => next(err));
})
.post((req,res,next)=>{
   res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.put((req,res,next)=>{
   Dishes.findByIdAndUpdate(req.params.dishId, {
      $set: req.body
   }, {new: true })
   .then((dish) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dish); //json to send back to client
   }, (err) => next(err))
   .catch((err) => next(err));
})
.delete((req,res,next)=>{
   Dishes.findById(req.params.dishId)
   .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
   }, (err) => next(err));
});

module.exports = dishRouter;

