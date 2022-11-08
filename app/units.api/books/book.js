const mongoose = require('mongoose');
const format = require('date-fns/format');
const slugify = require('slugify');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please, add title.'],
    maxlength: 200,
    trim: true
  },
  year: {
    type: Number,
    required: [true, 'Please, add year.'],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  },
  description: {
    type: String,
    maxlength: 1000,
    trim: true
  },
  slug: {
    type: String
  },

}, {
  timestamps: true
});

bookSchema.set('toObject', { virtuals: true });
bookSchema.set('toJSON', { virtuals: true });

bookSchema.pre("save", function(next) {

  this.slug = slugify(this.title, {
    replacement: '-',
    remove: /['.!'"@:*+?]/g,
    lower: true,
    trim: true
  });

  next();

});

bookSchema.virtual('dates_formatted').get(function() {

  return {
    created_formatted: format(this.createdAt, 'MMMM d, yyyy'),
    updated_formatted: format(this.updatedAt, 'MMMM d, yyyy')
  }

});

module.exports = mongoose.model('Book', bookSchema);