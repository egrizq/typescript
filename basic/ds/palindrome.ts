function palindrome(name:string):void {
    name = name.replace(/[^a-zA-Z ]/g, "").split(" ").join("").toLowerCase()

    let change = name.split("").reverse().join(""); 
    if (change === name) {
        console.log("palindrome")
    } else {
        console.log("not palindrome")
    }
}
palindrome("Ma$dam, @.in 3Ede*n, 4I'm-Ada#m")

// todo different method
function palindromeTwoPointer(str:string): void {
    str = str.replace(/[^a-zA-Z ]/g, '').split(" ").join("").toLowerCase();

    // Initialize two pointers
    let left = 0;
    let right = str.length - 1;

    // Iterate until the pointers meet
    while (left < right) {
        // Compare characters at both pointers 
        if (str[left] !== str[right]) {
            return console.log("not palindrome"); // Not a palindrome
        }

        // Move the pointers towards each other
        left++;
        right--;
    }

    return console.log("palindrome");
}
palindromeTwoPointer("Ma$dam, @.in 3Ede*n, 4I'm-Ada#m")