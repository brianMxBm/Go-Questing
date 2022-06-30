/* eslint-disable @typescript-eslint/no-explicit-any */ //TODO: FIX TPYES
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const verificationTokenSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId, // Store objectID's in DB
    ref: 'user',
    required: true
  },
  token: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    expires: 3600, // TODO: Change this.
    default: Date.now()
  }
});

verificationTokenSchema.pre('save', async function _(next) {
  // Hash password before sending it to the db.
  if (this.isModified('token')) {
    // hash token
    const hash = await bcrypt.hash(this.token, 8);
    this.token = hash;
  }
  next();
});

verificationTokenSchema.methods.compareToken = async function _(token: any) {
  const result = await bcrypt.compareSync(token, this.token);
  return result;
};

module.exports = mongoose.model('VerificationToken', verificationTokenSchema);
