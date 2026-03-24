const express = require('express');
const router = express.Router();


class Users {
	constructor() {
		this.items = [
		{
		"id": 0,
		"name": "Bezrukova Anna"
		}, 

		{
		"id": 1,
		"name": "Artyom Tsiganov"
		}
		];
	}
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  const users1 = new Users();
  res.send(users1.items);
});

module.exports = router;
