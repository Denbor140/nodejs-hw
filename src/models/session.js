import { Schema, model } from 'mongoose';

const sessionShema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    accesToken: {
      type: String,
      require: true,
    },
    refreshToken: {
      type: String,
      require: true,
    },
    accessTokenValidUntil: {
      type: Date,
      require: true,
    },
    refreshTokenValidUntil: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true },
);

export const Session = model('Session', sessionShema);
