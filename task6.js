for (let i = 1; i <= 50; i++) {
if (i % 3 === 0 && i % 5 === 0) {
    console.log("JavaScript");
    continue;
} else if (i % 3 === 0) { 
    console.log("Java");
    continue;
} else if (i % 5 === 0) {
    console.log("Script");
    continue;
} 
    console.log(i);
}