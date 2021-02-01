module.exports.objFilter = function (obj, ...rest) {
  if (!(obj instanceof Object)) {
    return obj;
  }
  const newObj = {};
  for (const key in obj) {
    if (rest.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
