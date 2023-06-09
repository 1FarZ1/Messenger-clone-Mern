const router = require('express').Router();

const{createNewConversation,getConversationsForUser,getConversation } = require('../controllers/conversation');


router.route("/").post(createNewConversation);
// router.route("/:userId").get(getConversationsForUser) // i think useless , i think
router.route("/:convId").get(getConversation)


module.exports = router;


