const router = require('express').Router();
const {login,register,logout, getCurrentUser } = require('../controllers/auth');
const authMiddleWare = require('../middlewares/auth');

router.post('/register',register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me',authMiddleWare,getCurrentUser);

module.exports = router;