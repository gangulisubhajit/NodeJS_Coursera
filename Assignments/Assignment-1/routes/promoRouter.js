const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("will return all promos");
})
.post((req,res,next) => {
    res.end('will add promo: '+req.body.name + 
      ' with details: '+req.body.description);
})
.put((req,res,next) => {
    res.end('no PUTs on /promotions');
    res.statusCode=403;
})
.delete((req,res,next) => {
    res.end('deleting all promos');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("will return detail of promo: "+req.params.promoId);
})
.post((req,res,next) => {
    res.end('no post on /promotions/'+req.params.promoId);
    res.statusCode=403;
})
.put((req,res,next) => {
    res.end('will update promo: '+req.body.name + 
      ' with details: '+req.body.description);
})
.delete((req,res,next) => {
    res.end('deleting promo '+req.params.promoId);
});

  
module.exports = promoRouter;