/* eslint-disable @typescript-eslint/no-var-requires */ //TODO: FIX IMPORTS
const router = require('express').Router();
const {
  createUser,
  signin,
  verifyEmail,
  forgotPassword,
  resetPassword
} = require('../controllers/user');
const { isResetTokenValid } = require('../middleware/user');
const { validateUser, validate, validateSignUp } = require('../middleware/validator');

router.post('/create', validateUser, validate, createUser);
router.post('/signin', validateSignUp, validate, signin);
router.post('/verify-email', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', isResetTokenValid, resetPassword);

module.exports = router;
