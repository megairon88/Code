let value = prompt("Enter a number: ");
let number = [-3, 5, 1, 3, 2, 10];

for (let i = 0; i < number.length; i ++) {
    if (value == number[i]) {
        alert("Value " + number[i] + "found at " + i);
    }
}