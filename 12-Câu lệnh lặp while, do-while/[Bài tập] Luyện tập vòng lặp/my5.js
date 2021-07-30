let f = 0, F0 = 0, F1 = 0;

let sum_fibonacci = "";

let fibonacci = "";

for(let i = 0; i < 20; i++) {
    if(i==0) {
        F = 1;
        F1 = 1;
        fibonacci += F+ " ";
    } else {
        F = F0 + F1;
        F0 = F1;
        F1 = F;
        fibonacci += F+ " ";
        sum_fibonacci += F;
        console.log(i +" = "+ F);
    }
}

document.write("Dãy Fibonacci là " + fibonacci + "<br>");
document.write("Tổng của các số = " + sum_fibonacci);