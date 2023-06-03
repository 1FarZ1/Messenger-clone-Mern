const router = require('express').Router();

const{addMessage,getMessages } = require('../controllers/message');


router.route("/").post(addMessage);
router.route("/:conversationId").get(getMessages)


module.exports = router;