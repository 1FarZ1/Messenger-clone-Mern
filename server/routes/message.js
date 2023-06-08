const router = require('express').Router();

const{addMessage,getMessages } = require('../controllers/message');


router.route("/").post(addMessage);
router.route("/:convId").get(getMessages)


module.exports = router;