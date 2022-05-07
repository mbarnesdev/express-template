const router = require('express').Router();

router.post('/', require('../controllers/UserController/postUser'));
router.get('/', require('../controllers/UserController/getUser'));
router.patch('/', require('../controllers/UserController/patchUser'));
router.delete('/', require('../controllers/UserController/deleteUser'));

module.exports = router;
