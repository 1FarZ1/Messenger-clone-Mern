const router = require('express').Router();
const {login,register,logout, getCurrentUser ,getOneUser} = require('../controllers/auth');
const authMiddleWare = require('../middlewares/auth');

router.post('/register',register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me',authMiddleWare,getCurrentUser);
router.get('/user/:id',getOneUser); // zid middlewarr t3 auth

module.exports = router;