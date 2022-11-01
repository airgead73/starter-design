const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  work: {
    type: String,
    required: [true, ['Please, add work name.']],
    maxlength: 50,
    lowercase: true,
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Please, add title.'],
    maxlength: 50,
    lowercase: true,
    trim: true
  },
  url_original: {
    type: String
  },
  url_thumbnail: {
    type: String
  }, 
  url_copyright: {
    type: String
  },
  url_w800: {
    type: String
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  }    
}, {
  timestamps: true
});

photoSchema.set('toObject', { virtuals: true });
photoSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Photo', photoSchema);
