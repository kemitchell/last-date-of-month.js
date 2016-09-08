module.exports = function (year, month) {
  return new Date(year, month, 0).getDate()
}
