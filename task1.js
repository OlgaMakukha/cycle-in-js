let i = 30;

while (i < 40) {
    
    if (i % 2 != 0) {
        console.log(i);
        i+=2;
        continue;
    }
    i++;
}