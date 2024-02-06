/* 
217. CONTAINS DUPLICATE

Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

// todo the main logic are just to check is there a duplicate number or not!!!

function containsDuplicate(nums: number[]): boolean {
    // more slower way but i am understand
    
    nums = nums.sort() // sort the array first 
    for (let n=0; n < nums.length; n++) {
        if (nums[n] === nums[n+1]) { // if there's the same number of the given number
            return true // then the array contains duplicate number
        }
    }
    return false
};

function containsDuplicate1(nums:number[]): boolean {
    // this just compare are the size of the given array
    // first using set to remove the duplicate number
    // then compare with the size of nums

    return nums.length > new Set(nums).size // fastest way
}

console.log(containsDuplicate([1,2,3,3,4]))