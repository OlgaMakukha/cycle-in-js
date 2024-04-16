let number = 1000;
let count = 0;

while (number > 50) {
    number = number / 2;
    count++;
}

console.log("It tooks " + count + " steps to reach from 1000 to 50");