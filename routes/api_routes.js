var express = require('express'),
    router  = new express.Router();

// Require controllers.
var usersCtrl = require('../controllers/users');
var checkInCtrl = require ('../controllers/checkin'); //MAYBE DELETE THIS

// Require token authentication.
var token = require('../config/token_auth');

// users resource paths:
router.post('/users',    usersCtrl.create);
router.get( '/users/me', token.authenticate, usersCtrl.me);
router.put( '/users/me', token.authenticate, usersCtrl.update);

router.post('/token', token.create);
router.post('/users/me/token', token.authenticate, token.refresh);

// check in stuff
router.post('/checkin',   checkInCtrl.create);

// router.get('/library/me', token.authenticate, LibraryController.me);

module.exports = router;
