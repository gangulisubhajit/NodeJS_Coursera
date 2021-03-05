const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("will return all dishes");
})
.post((req,res,next) => {
    res.end('will add dish: '+req.body.name + 
      ' with details: '+req.body.description);
})
.put((req,res,next) => {
    res.end('no PUTs on /dishes');
    res.statusCode=403;
})
.delete((req,res,next) => {
    res.end('deleting all dishes');
});

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("will return detail of dish: "+req.params.dishId);
})
.post((req,res,next) => {
    res.end('no post on /dishes/'+req.params.dishId);
    res.statusCode=403;
})
.put((req,res,next) => {
    res.end('will update dish: '+req.body.name + 
      ' with details: '+req.body.description);
})
.delete((req,res,next) => {
    res.end('deleting dish '+req.params.dishId);
});

  
module.exports = dishRouter;