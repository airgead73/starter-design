const mongoose = require("mongoose");

const checkID = ($model) => async (req, res, next) => {

  // check if id is valid

  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res
    .status(400)
    .json({
      success: false,
      message: 'ID is not valid.'
    });    
  }

  // check if item exists

  const data = await $model.findById(id);

  if(!data) {
 
    return res
    .status(400)
    .json({
      success: false,
      message: 'Item is not found.'
    }); 
      
  }

  next();

}

module.exports = checkID;