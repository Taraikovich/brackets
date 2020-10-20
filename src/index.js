module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  let bracketsPair = [];
    
  for (i = 0; str.length > 0; ) {
    if (str[i + 1] === undefined) {
      return false;
    } else if (bracketsConfig.join('').includes([str[i], str[i + 1]])) {
      bracketsPair.push([str[i], str[i + 1]]);
      str.splice(i + 1, 1);
      str.splice(i, 1);
      i = 0;
    } else {
      i += 1;
    }
  }
 
  for (i = 0; i < bracketsPair.length; i++) {
    if (bracketsConfig.join('').includes(bracketsPair[i]) === false) {
      return false;
    }
  }
  return true;
}