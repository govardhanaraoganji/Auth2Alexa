var express = require('express');
var router = express.Router();
var NodeRestClient = require('node-rest-client').Client;
var RestClient = new NodeRestClient();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Be One' });
});

router.get('/authorize', function(req, res, next) {
    console.log("Body :"+ JSON.stringify(req.body));
    console.log("Query :"+ JSON.stringify(req.query));
    console.log("Query :"+ JSON.stringify(req.params));
  res.render('index.html', { title: 'authorize' });
});

router.get('/cb', function(req, res, next) {
  res.render('index.html', { title: 'cb' });
});

router.post('/login', function(req, res, next) {
    console.log("User Name :"+ req.body.userName);
    console.log("User Name :"+ req.body.password);
    if(req.body.userName && req.body.password){
      var args ={
        data: {
          "email_id": req.body.userName,
          "app_device_token_id": "qwertyuiopasdfghjkl",
          "password": req.body.password,
          "device_type": "IOS"
          },
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
       }
       };
      try{
        RestClient.post("http://google.com", args, function(data, resp){
          var speechOutput = "Unable to parse the response, please try again !";
          var repromptText = "you can ask status of your devices";
          if(data){
            console.log("Data : "+JSON.stringify(data));
            res.render('index.html', { title: 'Login successfully', status: true });
          }else{
            if(resp){
              console.log("Resp : "+JSON.stringify(resp));
              res.render('index.html', { title: 'Login successfully', status: true });
            }else{
              console.log("Error please try again after some time.");
              res.render('index.html', { title: 'Login failed, please try again.', status: false });
            }
          }
        });
      }catch(e){
        console.log(e);
        res.render('index.html', { title: 'Login failed, please try again.', status: false });
      }
  }else{
    res.render('index.html', { title: 'Be One' });
  }
});

router.get('/login', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

module.exports = router;
