const re = (res, err = null, problem = null) => {
  let err_code = problem ? 400 : 500;
  return res.status(err_code).json({
    status: 'err',
    error: err || 'error ' + problem
  });
};

module.exports = re;