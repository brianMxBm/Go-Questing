/* eslint-disable @typescript-eslint/no-explicit-any */ //TODO: FIX TPYES
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  verified: {
    type: Boolean,
    default: false,
    required: true
  }
});

userSchema.pre('save', async function _(next) {
  // Hash password before sending it to the db.
  if (this.isModified('password')) {
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;
  }
  next();
});

userSchema.methods.comparePassword = async function _(password: any) {
  const result = await bcrypt.compareSync(password, this.password);
  return result;
};

module.exports = mongoose.model('User', userSchema);
