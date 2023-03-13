/** https://leetcode.com/problems/longest-palindromic-substring/

Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Test Case 1
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Test Case 2
Input: s = "cbbd"
Output: "bb"

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */

// Solution 1

const longestPalindrome = s => {

    let str = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = left + j;
            while (left >= 0 && right < s.length && s[left] == s[right]) {
                left--;
                right++;
            }
            if (right - left - 1 > str.length) {
                str = s.slice(left + 1, right);
            }
        }
    }
    return str;
};

console.log(longestPalindrome("babad")); // bab