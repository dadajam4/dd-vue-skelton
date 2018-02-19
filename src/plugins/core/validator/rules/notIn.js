const notIn = function notIn(value, options) {
  if (Array.isArray(value)) {
    return value.every(val => notIn(val, options));
  }

  // eslint-disable-next-line
  return ! options.filter(option => option == value).length;
};

export default notIn;
