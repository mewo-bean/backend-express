const express = require('express');
const router = express.Router();


class Users {
	counter = 2;
	constructor() {
		this.items =[
			{
			"id": 1,
			"name": "Bezrukova Anna"
			},
			{
			"id": 2,
			"name": "Tsiganov Artyom"
			} 
		]
	}

	add(parsed_json) {
		this.items.push({"id": ++this.counter, "name": parsed_json.name});
	}
}

const user_class = new Users();

router.get('/', function(req, res, next) {
  res.send(user_class.items);
});


router.post('/', function(req, res, next) {
	user_class.add(req.body);
	res.status(201).json(user_class);
});

module.exports = router;
