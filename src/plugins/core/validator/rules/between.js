const between = function between(value, [min, max]) {
  if (Array.isArray(value)) {
    return value.every(val => between(val, [min, max]));
  }

  return Number(min) <= value && Number(max) >= value;
};

export default between;
