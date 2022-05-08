'use strict';

/**
 Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:
Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
Return the string formed after mapping.
It's guaranteed that a unique mapping will always exist.
 
Example 1:
Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
Example 2:
Input: s = "1326#"
Output: "acz"
Example 3:
Input: s = "25#"
Output: "y"
Example 4:
Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
Output: "abcdefghijklmnopqrstuvwxyz"
 */

const freqAlphabets = function (s) {
    let result = ''
    let arr = s.split('');
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '#') {
            result = String.fromCharCode(parseInt(arr.slice(i - 2, i).join("")) + 96) + result
            i -= 2;
        } else {
            result = String.fromCharCode(parseInt(s[i]) + 96) + result
        }
    }
    return result;
};

console.log(freqAlphabets("10#11#12"));
console.log(freqAlphabets("1326#"));
console.log(freqAlphabets("25#"));
console.log(freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"));
