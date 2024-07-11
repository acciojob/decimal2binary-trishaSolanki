function decimalToBinary(decimal) {
    if (decimal < 0) {
        return 'Negative numbers are not supported.';
    }
    return decimal.toString(2);
}

// Test the function
console.log(decimalToBinary(7));   // Output: 111
console.log(decimalToBinary(10));  // Output: 1010
console.log(decimalToBinary(33));  // Output: 100001
