const router = require('express').Router();

const{createNewConversation,getConversationsForUser,getConversation } = require('../controllers/conversation');


router.route("/").post(createNewConversation);
router.route("/:userId").get(getConversationsForUser)
router.route("/:conversationId").get(getConversation)


module.exports = router;


