import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    max: 32
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  },
  resetLink: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;