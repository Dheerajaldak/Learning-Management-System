import mongoose from 'mongoose';

// Define the schema for contact submissions
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Create and export the model
const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
