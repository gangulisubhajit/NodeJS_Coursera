const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("will return all leaders");
})
.post((req,res,next) => {
    res.end('will add leader: '+req.body.name + 
      ' with details: '+req.body.description);
})
.put((req,res,next) => {
    res.end('no PUTs on /leaders');
    res.statusCode=403;
})
.delete((req,res,next) => {
    res.end('deleting all leaders');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end("will return detail of leader: "+req.params.leaderId);
})
.post((req,res,next) => {
    res.end('no post on /leaders/'+req.params.leaderId);
    res.statusCode=403;
})
.put((req,res,next) => {
    res.end('will update leader: '+req.body.name + 
      ' with details: '+req.body.description);
})
.delete((req,res,next) => {
    res.end('deleting leader '+req.params.leaderId);
});

  
module.exports = leaderRouter;