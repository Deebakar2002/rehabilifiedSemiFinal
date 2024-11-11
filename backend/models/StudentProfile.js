const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentAuth', // Links to the StudentAuth model
    required: true,
    unique: true // Ensure each student has one profile
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensure the email is unique for each student
  },
  fullName: {
    type: String,
    required: true
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  },
  profilePicture: {
    type: String,
    default: ''
  },
  profession: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: '',
    validate: {
      validator: function (v) {
        return /^\d{10,15}$/.test(v); // Example validation for phone numbers
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  bio: {
    type: String,
    default: ''
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course' // Reference to Course model
    }
  ],
  notes: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true } // URLs or paths to notes
    }
  ],
  videos: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true } // URLs to videos
    }
  ],
  meetingLink: {
    type: String,
    default: ''
  },
  meetingDate: {
    type: Date,
    default: null
  },
  meetingTime: {
    type: String,
    default: '',
    validate: {
      validator: function (v) {
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v); // HH:mm format validation
      },
      message: props => `${props.value} is not a valid time format!`
    }
  }
}, { timestamps: true });

// Pre-save hook to automatically populate the email field from the StudentAuth model
studentProfileSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const studentAuth = await mongoose.model('StudentAuth').findById(this.studentId);
      if (studentAuth) {
        this.email = studentAuth.email; // Assign email from StudentAuth
      }
    } catch (error) {
      return next(error); // Pass any errors to the next middleware
    }
  }
  next();
});

const StudentProfile = mongoose.model('StudentProfile', studentProfileSchema);
module.exports = StudentProfile;
