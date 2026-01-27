import { model, Schema } from 'mongoose';

const projectSchema = new Schema(
  {
    images: {
      type: [String],
      required: true,
    },
    en: {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
    },
    uk: {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Project = model('Project', projectSchema);
