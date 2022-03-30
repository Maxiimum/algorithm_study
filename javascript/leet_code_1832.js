'use strict';

/*
Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:
Input: sentence = "leetcode"
Output: false
*/
#1
const checkIfPangram = function(sentence) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let result;
    const sentenceToarray = sentence.split("");
    for(let i = 0; i < sentenceToarray.length; ++i){
        for(let j = 0; j <alphabet.length; ++j){
            
            if(sentenceToarray[i] === alphabet[j])
                alphabet.splice(j,1);
            if(alphabet.length === 0)
                result = true;
            else
                result = false;
            
        }
    }
    return result;
};
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode")); 

#2
const checkIfPangram = function(sentence) {
    return new Set(sentence.split("")).size === 26;
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
