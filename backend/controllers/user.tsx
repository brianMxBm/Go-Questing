/* eslint-disable @typescript-eslint/no-explicit-any */ //TODO: FIX TYPES
/* eslint-disable @typescript-eslint/no-var-requires */ //TODO: REMOVE
export {};
const jwt = require('jsonwebtoken');
const { isValidObjectId } = require('mongoose');
const User = require('../schemas/userSchema');
const { sendError, createRandomBytes } = require('../utils/helper');
const VerificationToken = require('../schemas/verificationSchema');
const { generateVerificationCall } = require('../utils/verification');
const { mailTransport } = require('../utils/mail');
const {
  generateEmailTemplate,
  welcomeEmailTemplate,
  forgotPasswordTemplate,
  resetPasswordTemplate
} = require('../templates/emailTemplate');
const ResetToken = require('../schemas/resetTokenSchema');

exports.createUser = async (req: any, res: any) => {
  //TODO: Change Types.
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) return sendError(res, 'This email already exists!');

  const newUser = new User({
    name,
    email,
    password
  });

  const token = generateVerificationCall();
  const verificationToken = new VerificationToken({
    owner: newUser._id,
    token
  });

  await verificationToken.save();
  await newUser.save();

  mailTransport().sendMail({
    from: 'goQuestVerification@quest.com',
    to: newUser.email,
    subject: 'Verify your goQuest account!',
    html: generateEmailTemplate(token)
  });
  res.send(newUser);

  return null; // TODO: Not good practice. Implement exception handling later.
};

exports.signin = async (req: any, res: any) => {
  const { email, password } = req.body;
  if (!email || !password) return sendError(res, 'Email/Password Missing');

  const user = await User.findOne({ email });
  if (!user) return sendError(res, 'User not found');

  const isMatched = await user.comparePassword(password);
  if (!isMatched) return sendError(res, 'Email/Password Does Not Match!');

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });

  res.json({
    success: true,
    user: {
      name: user.name,
      email: user.email,
      id: user._id,
      token
    }
  });
  return null; // TODO: Not good practice. Implement exception handling later.
};

exports.verifyEmail = async (req: any, res: any) => {
  const { userId, token } = req.body;
  if (!userId || !token.trim()) return sendError(res, 'Invalid request, missing paramaters');

  if (!isValidObjectId(userId)) return sendError(res, 'Invalid user ID');

  const user = await User.findById(userId);
  if (!user) return sendError(res, 'User not found');

  if (user.verified) return sendError(res, 'This account is already verified');

  const OTP = await VerificationToken.findOne({ owner: user._id });

  if (!OTP) return sendError(res, 'Sorry, user not found');

  const hasMatched = await OTP.compareToken(token);
  if (!hasMatched) return sendError(res, 'Please provide a valid token');

  user.verified = true;

  await VerificationToken.findByIdAndDelete(OTP._id);
  await user.save();

  mailTransport().sendMail({
    from: 'goQuest@quest.com',
    to: user.email,
    subject: 'Get Ready To Quest!',
    html: welcomeEmailTemplate('Email Verified Succesfully', 'Thanks for connecting with us') // TODO: Replace In Production
  });
  res.json({
    success: true,
    message: 'email is verified',
    user: { name: user.name, email: user.email, id: user._id }
  });
  return null; // TODO: Not good practice. Implement exception handling later.
};

exports.forgotPassword = async (req: any, res: any) => {
  const { email } = req.body;
  if (!email) return sendError(res, 'Please provide a valid email');

  const user = await User.findOne({ email });

  if (!user) return sendError(res, 'User not found, invalid request');

  const token = await ResetToken.findOne({ owner: user._id });

  if (token) return sendError(res, 'Token already generated, please wait to generate another');

  const random = await createRandomBytes();
  const resetToken = new ResetToken({ owner: user._id, token: random });
  await resetToken.save();

  mailTransport().sendMail({
    from: 'goQuestReset@quest.com',
    to: user.email,
    subject: 'Need to reset your credentials questor?',
    html: forgotPasswordTemplate(
      `http://localhost:3000/reset-password?token=${random}&id=${user._id}`
    )
  });
  res.json({ success: true, message: 'Password reset link sent to your email' });
  return null;
};

exports.resetPassword = async (req: any, res: any) => {
  const { password } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) return sendError(res, 'user not found'); // We must check for user again

  const isSamePass = await user.comparePassword(password);
  if (isSamePass) return sendError(res, "Can't use old password");

  if (password.trim().length < 8 || password.trim().length > 20) {
    // TODO: Place in validator.
    return sendError(res, 'Password must be 8 to 20 characters long');
  }

  user.password = password.trim();
  await user.save();

  await ResetToken.findOneAndDelete({ owner: user._id });

  mailTransport().sendMail({
    from: 'goQuest@quest.com',
    to: user.email,
    subject: 'Password reset sucessfully!',
    html: resetPasswordTemplate('Password Reset Succesfully', 'Login With Your New Credentials!') // TODO: Replace In Production
  });

  res.json({
    sucess: true,
    message: 'Password Reset Succesfully'
  });

  return null;
};
