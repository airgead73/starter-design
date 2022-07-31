const handleQuery = ($model) => async (req, res, next) => {

  /**
 * @todo Add populate functionality to query function.
 * */

  let query;

  const reqQuery = {...req.query}; 

  const removeFields = ['select', 'sort']

  removeFields.forEach(param => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);

  query = $model.find(JSON.parse(queryStr));

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields)
  }

  // sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy)
  } else {
    query = query.sort('lname')
  }

  const results = await query;

  res.results = {
    success: true,
    count: results.length,
    data: results
  };

  next();

}

module.exports = handleQuery;