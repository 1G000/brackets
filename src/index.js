module.exports = function check(str, bracketsConfig) {
  bracketsConfigMap = new Map();
  bracketsConfig.forEach(([key, value]) => bracketsConfigMap.set(value, key));
  str = str.split("");
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (Array.from(bracketsConfigMap.values()).includes(str[i])) {
      bracketsConfigMap.get(str[i]) === str[i] && stack.includes(str[i])
        ? stack.pop()
        : stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let lastBracket = stack[stack.length - 1];
      if (bracketsConfigMap.get(str[i]) === lastBracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
