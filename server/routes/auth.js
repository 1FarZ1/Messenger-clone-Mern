const router = require('express').Router();
const {login,register,logout, getCurrentUser } = require('../controllers/auth');

router.post('/register',register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me',getCurrentUser);

module.exports = router;