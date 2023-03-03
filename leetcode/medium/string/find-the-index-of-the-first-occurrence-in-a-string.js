/** https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
or -1 if needle is not part of haystack.

Test Case 1
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Test Case 2
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

// Solution 1 : Two pointers

const strStr1 = (haystack, needle) => {
    if (!needle.length) return 0;
    if (!haystack.length || haystack.length < needle.length) return -1;
    let i = 0, j = 0;
    while (i <= haystack.length && j <= needle.length) {
        if (haystack.length < i + needle.length) break;
        if (haystack[i + j] === needle[j]) {
            j++;
        } else {
            i++;
            j = 0;
        }
        if (j === needle.length) return i;
    }
    return -1;
};

console.log(strStr1("sadbutsad", "sad")); // 0

