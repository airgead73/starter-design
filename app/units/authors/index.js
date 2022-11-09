const { authorAPI, authorCLIENT } = require('./author.routes');
const Author = require('./author');

module.exports = {
  authorAPI,
  authorCLIENT,
  Author
}