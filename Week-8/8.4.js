/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
    const left = [];
    const parenthesis = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            left.push(s[i]);
        } else if (parenthesis[left.pop()] !== s[i]) {
            return false;
        }
    }
    return !left.length;
};


console.log(isValid("()[{]"))
