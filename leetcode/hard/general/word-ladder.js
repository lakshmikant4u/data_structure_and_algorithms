/** https://leetcode.com/problems/word-ladder/

Word Ladder

A transformation sequence from word beginWord to word endWord using a dictionary 
wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, 
return the number of words in the shortest transformation sequence from beginWord to endWord, 
or 0 if no such sequence exists.

Test Case 1
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", 
which is 5 words long.

Test Case 2
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

Constraints:

1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the words in wordList are unique.

 */

// Solution 1

const ladderLength = (beginWord, endWord, wordList) => {

    if (!wordList.includes(endWord)) return 0;
    const queue = [];
    const n = wordList.length;
    const isVisited = new Array(n).fill(false);
    let ladder = 1;

    queue.push(beginWord);

    while (queue.length) {
        let size = queue.length;

        while (size) {
            const front = queue.shift();
            if (front == endWord) return ladder;

            for (let i = 0; i < n; i++) {
                if (!isVisited[i] && isDiffByOne(front, wordList[i])) {
                    isVisited[i] = true;
                    queue.push(wordList[i]);
                }
            }
            size -= 1;
        }
        if (!queue.length) ladder = 0;
        else ladder += 1;
    }

    return ladder;
};

const isDiffByOne = (a, b) => {
    let diffCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            diffCount += 1;
            if (diffCount > 1) return false;
        }
    }

    return diffCount == 1;
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 5