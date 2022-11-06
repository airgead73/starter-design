const mongoose = require('mongoose');
const format = require('date-fns/format');
const slugify = require('slugify');

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
  dob: {
    type: Date,
    required: [true, ['Please, add dob.']]
  },
  comments: {
    type: String,
    maxlength: 200,
    trim: true
  },
  slug: {
    type: String
  },

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

authorSchema.virtual('dates_formatted').get(function() {

  return {
    createdAt: format(this.createdAt, 'MMMM d, yyyy'),
    updatedAt: format(this.updatedAt, 'MMMM d, yyyy'),
    dob: format(this.dob, 'MMMM d, yyyy')
  }

});

authorSchema.virtual('fullname').get(function() {
  const firstName = (this.fname).charAt(0).toUpperCase() + (this.fname).slice(1);
  const lastName = (this.lname).charAt(0).toUpperCase() + (this.lname).slice(1);
  return `${firstName} ${lastName}`;
});

authorSchema.virtual('listname').get(function() {
  const firstName = (this.fname).charAt(0).toUpperCase() + (this.fname).slice(1);
  const lastName = (this.lname).charAt(0).toUpperCase() + (this.lname).slice(1);
  return `${lastName}, ${firstName}`;
});

authorSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'author',
  justOne: false
});

module.exports = mongoose.model('Author', authorSchema);