import isEmail from 'validator/lib/isEmail';

const email = function email(value) {
  if (Array.isArray(value)) {
    return value.every(val => isEmail(String(val)));
  }

  return isEmail(String(value));
};

export default email;
