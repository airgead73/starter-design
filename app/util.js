const capitalize = (str) => {
  if(typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const lowercase = (str) => {
  if(typeof str !== 'string') return '';
  return str.charAt(0).toLowerCase() + str.slice(1);
}

module.exports = {
  capitalize,
  lowercase
}