import mongoose from 'mongoose';

const detailsSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      phone_number: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      hobbies: {
        type: String,
        required: true,
      },
      
    },
    {
      timestamps: true,
    }
  );

  export const Details = mongoose.model('details', detailsSchema);
  