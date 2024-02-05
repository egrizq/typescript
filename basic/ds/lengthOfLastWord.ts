/* 
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

*/

function lengthOfLastWord(word: string): number {
    let newWord = word.trim() // cut space in first&last sentence
    let counter = 0

    // loop through the sentence
    for (let n of newWord) { 
        // the logic are if the n not meet space then begin counter
        // if meet space then reload the counter
        if (n !== " ") { 
            counter++
        } else {
            counter = 0
        }
    }

    // return counter
    return counter
}

console.log(lengthOfLastWord("   fly me   to   the moon  "))