let f = 0, f0 = 0, f1 = 0;

let fibonacci = "";

let i = 0;
while(i <20) {
    if (i == 0) {
        f = 1;
        f1 = 1;
        fibonacci += f + " ";
    } else {
        f = f0 + f1;
        f0 = f1;
        f1 = f;
        fibonacci += f + " ";
        console.log(i + " = " + f);
    }
    i++;
}
document.write(fibonacci);