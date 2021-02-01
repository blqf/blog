module.exports = (err, req, res, next) => {
  if (err) {
    res.send({
      code: 500,
      msg: err
    })
  } else {
    next();
  }
}