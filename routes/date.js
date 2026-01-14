import express from 'express';
var router = express.Router();

/* GET api/getTime. */
router.get('/', function(req, res) {
  console.log("getting time!");
  let time = new Date()
  res.type("txt")
  res.send(time);
});

/* GET api/getTime/json. */
router.get('/json', function(req, res) {
  console.log("getting time in json!");
  let time = new Date()
  res.type("json");
  res.send({
    "now":time,
  });
});

export default router;
