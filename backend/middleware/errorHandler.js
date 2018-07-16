module.exports = (err, req, res, next) => {
  console.log(err);
  res.json({ error: err.message || err })
}