var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'item'
});

/* GET home page. */
router.post('/app', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*")
  connection.query("SELECT * FROM taobao",function(err, rows, fields){
    res.send(rows)
  })
});

router.post('/ccc',function(req,res,next){
  res.header("Access-Control-Allow-Origin","*")
  var hh=req.body.sh1;
  var ss=req.body.sh2;
  connection.query('INSERT INTO taotao (name,title) VALUES ("'+hh+'","'+ss+'")',function(err, rows, fields){
    res.send(rows)
  })
})

module.exports = router;
