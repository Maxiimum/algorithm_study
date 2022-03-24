'use strict';
/*
1281. Subtract the Product and Sum of Digits of an Integer
Easy
533
142
Add to List
Share
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
Example 1:
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:
Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
*/
const subtractProductAndSum = function (n) {

    const arr_n = (n+"").split("").map(Number);
    let product_n = 1;
    let sum_n = 0;

    for (let i in arr_n) {
        product_n *= arr_n[i];
        sum_n += arr_n[i];
    }

    return product_n - sum_n;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
