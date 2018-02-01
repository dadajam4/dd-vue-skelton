export default (str, upper = false) => {
  str = str || '';
  str = str
    .replace(/^[\-_ ]/g, '')
    .replace(/[\-_ ]./g, match => match.charAt(1).toUpperCase());

  return upper ? str.replace(/^[a-z]/g, match => match.toUpperCase()) : str;
}