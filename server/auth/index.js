'use strict';

import express from 'express';
import passport from 'passport';
import config from '../config/environment';
import {
	User
} from '../sqldb';

// Passport Configuration
require('./local/passport').setup(User, config);

var router = express.Router();
router.use('/local', require('./local'));

export default router;