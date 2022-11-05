const mongoose = require('mongoose');

const isMongooseID = () => async(req, res, next) => {

  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {

    res.results = {
      success: false,
      message: 'ID is not valid'
    }

    next();

  }

  return next();

}

module.exports = isMongooseID;