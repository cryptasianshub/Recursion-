function isPalindrome(word) {
    // Base case: an empty word or a word with a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Check if the first and last characters match
    if (word[0] === word[word.length - 1]) {
        // Recursively check the remaining substring
        return isPalindrome(word.slice(1, -1));
    } else {
        // If the first and last characters don't match, it's not a palindrome
        return false;
    }
}

// Test the function
const testWords = ["gag", "kayak", "php", "radar", "hello", "world", "level"];

testWords.forEach(word => {
    const result = isPalindrome(word);
    console.log(`${word} is a palindrome? ${result}`);
});


/*
This function isPalindrome uses recursion to check if a word is a palindrome. It compares the first and last characters of the word. If they match, it continues to check the remaining substring by recursively calling itself with the substring between the first and last characters. If any pair of characters doesn't match, or if the word length becomes 0 or 1, it returns false or true accordingly.
*/ 