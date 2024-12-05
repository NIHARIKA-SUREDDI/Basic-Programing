// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


console.log(isPrime(11)); 
console.log(isPrime(4));  



function isEvenOdd(num) {
    return num % 2 === 0;
}

console.log(isEvenOdd(10)); 
console.log(isEvenOdd(7));  git add index.js

