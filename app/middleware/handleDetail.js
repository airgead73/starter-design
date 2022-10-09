const { default: mongoose } = require("mongoose");

const handleDetail = ($model) => async (req, res, next) => {

  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    
    res.results = {
      success: false,
      message: 'Item not found.',
      data: null
    }

    return next();

  }

  const data = await $model.findById(id);

  if(!data) {
    res.results = {
      success: false,
      message: 'Item not found.',
      data: null
    }

    return next();
      
  }

  res.results = {
    success: true,
    message: 'Item has been found.',
    data: data
  }

  next();

}

module.exports = handleDetail;