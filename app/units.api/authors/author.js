const mongoose = require('mongoose');
const format = require('date-fns/format');
const slugify = require('slugify');
const { capitalize } = require('../../util');

const authorSchema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, ['Please, add first name.']],
    maxlength: 50,
    lowercase: true,
    trim: true
  },
  lname: {
    type: String,
    required: [true, 'Please, add last name.'],
    maxlength: 50,
    lowercase: true,
    trim: true
  },
  slug: {
    type: String
  },
  dob: {
    type: Date,
    required: [true, ['Please, add dob.']]
  }

}, {
  timestamps: true
});

authorSchema.set('toObject', { virtuals: true });
authorSchema.set('toJSON', { virtuals: true });

authorSchema.pre("save", function(next) {

  const fullname = `${this.lname} ${this.fname}`;
  this.slug = slugify(fullname, {
    replacement: '-',
    lower: true,
    trim: true
  });

  next();

});

// authorSchema.virtual('display').get(function() {

//   const displayFirst = this.fname

// });

authorSchema.virtual('dob_formatted').get(function() {
  return format(this.dob, 'MMMM d, yyyy')
});

module.exports = mongoose.model('Author', authorSchema);
