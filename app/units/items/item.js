const mongoose = require('mongoose');
const slugify = require('slugify');

const itemSchema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, 'Please, add first name.'],
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

}, {
  timestamps: true
});

itemSchema.set('toObject', { virtuals: true });
itemSchema.set('toJSON', { virtuals: true });

itemSchema.pre("save", function(next) {

  const fullname = `${this.lname} ${this.fname}`;
  this.slug = slugify(fullname, {
    replacement: '-',
    lower: true,
    trim: true
  });

  next();

});

itemSchema.virtual('fullname').get(function() {
  const firstName = (this.fname).charAt(0).toUpperCase() + (this.fname).slice(1);
  const lastName = (this.lname).charAt(0).toUpperCase() + (this.lname).slice(1);
  return `${firstName} ${lastName}`;
});

itemSchema.virtual('listname').get(function() {
  const firstName = (this.fname).charAt(0).toUpperCase() + (this.fname).slice(1);
  const lastName = (this.lname).charAt(0).toUpperCase() + (this.lname).slice(1);
  return `${lastName}, ${firstName}`;
});

module.exports = mongoose.model('Item', itemSchema);