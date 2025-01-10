function sumOfNumbers() {
    let numbers = prompt("Enter numbers separated by spaces or commas:");
    let numArray = numbers.split(/[\s,]+/).map(Number); // Split by spaces or commas
    let sum = 0;

    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }

    if (isNaN(sum)) {
        alert("Please enter valid numbers.");
    } else {
        alert("The sum of the numbers is: " + sum);
    }
}

sumOfNumbers();
