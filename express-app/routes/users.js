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
<<<<<<< Updated upstream
  const users1 = new Users();
  res.send(users1.items);
=======
  res.send('Hello, world!');
  users = [2]
});

class Users {
    constructor() {
      items =[
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

    add(id, name) {
      items.push(name)
    }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  user = new Users();
  name = req.body
  user.
  
>>>>>>> Stashed changes
});

module.exports = router;
