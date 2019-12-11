var express = require('express');
const jwt = require('jsonwebtoken');

var router = express.Router();
var Users = require('../model/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  // res.json(req.body);
  var user =   new Users({
    "firstname": req.body.fName,
    "lastname": req.body.lName,
    "username": req.body.email,
    "password": req.body.password,
    "subscribe" : req.body.subscribe,
    "termsandconditions" : req.body.termsandconditions
  });

  user.save()
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  });
  
});

router.post('/login', function(req, res, next) {
  Users.findOne({username : req.body.email, password : req.body.password})
 .then(result => {
   jwt.sign({result}, 'privatekey', { expiresIn: '1h' },(err, token) => {
        if(err) { console.log(err) }   
        res.json({result: result , token : token});
    });
  
 })
 .catch(err => {
   res.json(err);
 });
})

module.exports = router;
