
// Write a function called vowelCount which accepts a string and returns a map where the keys arenumbers and the values are the count of 
// the vowels in the string.
function isVowel(char) {
    return "aeiou".includes(char);
}

function countVowel(word) {
    const vowelCount = new Map();
    for (let char of word) {
        let lowerCaseChar = char.toLowerCase();
        if (isVowel(char)) {
            if (vowelCount.has(lowerCaseChar)) {
                vowelCount.set(lowerCaseChar, vowelCount.get(lowerCaseChar) + 1)
            }
            else {
                vowelCount.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelCount;


}


console.log(countVowel("qqeeiioouu"))