const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, ['Please, add a title']],
    maxlength: 200,
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'    
  },
  slug: {
    type: String
  },
  comments: {
    type: String,
    maxlength: 500,
    trim: true
  }
}, {
  timestamps: true
});

bookSchema.set('toObject', { virtuals: true });
bookSchema.set('toJSON', { virtuals: true });

bookSchema.pre("save", function(next) {
  this.slug = slugify(this.title, {
    replacement: '-',
    lower: true,
    trim: true
  });
});

module.exports = mongoose.model('Book', bookSchema);