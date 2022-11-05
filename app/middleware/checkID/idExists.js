const idExists = ($model,$populate) => async(req, res, next) => {

  const { id } = req.params;

  let query = $model.findById(id);

  if($populate) {
    query = query.populate($populate);
  }

  const data = await query;

  if(!data) {

    res.results = {
      success: false,
      message: 'Item cannot be found.'
    }

    next();

  }

  return next();

}

module.exports = idExists;