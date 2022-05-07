const router = require('express').Router();

router.get('/', require('../controllers/RootController/getRoot'));

module.exports = router;
