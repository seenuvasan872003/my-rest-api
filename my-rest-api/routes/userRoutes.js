const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

// @route    POST api/users/register
// @desc     Register user
// @access   Public
router.post('/register', registerUser);

// @route    POST api/users/login
// @desc     Authenticate user & get token
// @access   Public
router.post('/login', loginUser);

// @route    GET api/users
// @desc     Get user data
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
