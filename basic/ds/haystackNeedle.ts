/*
28. FIND THE INDEX OF THE FIRST OCCURRENCE IN A STRING

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

*/

function sameStr(haystack:string, needle:string): number {
    // set up the variable for length    
    let hays = haystack.length;
    let need = needle.length;
    
    // loop through haystack word
    // and to 'remember' the first occurence
    for (let i=0; i<hays; i++) {
        let counter = 0 // set a counter to equalize need

        // loop again to handle the same word of needle 
        for (let k=i; k<hays; k++) {
            // the logic are, if one word of needle & haystack is same the counter += 1
            if (needle[counter] === haystack[k]) {
                counter += 1
            } else {
                // if not break to start again the counter
                // but the k is continue to add
                break
            }

            // threshold to check are the counter is the same length of needle
            if (counter == need) {
                return i
            }
        }
    }
    return -1 // return this if no one is meet between needle and haystack
}

console.log(sameStr("hello", "ll"))