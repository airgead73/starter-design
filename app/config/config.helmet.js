const policies = {
  directives: {
    "default-src": ["'self'"],
    "img-src": ["'self'", "https://res.cloudinary.com", "https://via.placeholder.com","data:"],
    "font-src": ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com","https://cdn.jsdelivr.net"],
    "style-src-elem": ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://cdn.jsdelivr.net"],
    "style-src": ["'self'", "'unsafe-inline'"],
    "script-src-elem": ["'self'", "https://cdn.jsdelivr.net", "https://kit.fontawesome.com/c2a0ddd321.js"],
    "script-src": ["'self'", "https://cdn.jsdelivr.net", "https://kit.fontawesome.com/c2a0ddd321.js"]
  }
}

module.exports = { policies };