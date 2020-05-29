const rs = (res, data) => {
  return res.status(200).json({
    status: 'ok',
    data: data
  });
};

module.exports = rs;