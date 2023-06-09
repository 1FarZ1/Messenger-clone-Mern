const router = require('express').Router();

const{addMessage,getMessages } = require('../controllers/message');


router.route("/:convId").get(getMessages).post(addMessage);


module.exports = router;