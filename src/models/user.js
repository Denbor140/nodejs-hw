import { Schema, model } from 'mongoose';

const userShema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

userShema.pre('save', function () {
  if (!this.username) {
    this.username = this.email;
  }
});

userShema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const User = model('User', userShema);
