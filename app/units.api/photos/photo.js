const mongoose = require('mongoose');
const format = require('date-fns/format');

const photoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please, add title.'],
    maxlength: 50,
    lowercase: true,
    trim: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: [true, ['Please, add book.']],
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

photoSchema.virtual('dates_formatted').get(function() {

  return {
    created_formatted: format(this.createdAt, 'MMMM d, yyyy'),
    updated_formatted: format(this.updatedAt, 'MMMM d, yyyy')
  }

});

module.exports = mongoose.model('Photo', photoSchema);