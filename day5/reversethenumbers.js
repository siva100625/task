function reverseNumber() {
    let number = prompt("Enter a number:");
    let reversed = number.split('').reverse().join('');
    alert("The reversed number is: " + reversed);
}

reverseNumber();
