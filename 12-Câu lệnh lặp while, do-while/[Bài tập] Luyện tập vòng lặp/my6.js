let count = 0, sum = 0;
let number_sequence = "";
for(let i = 1; ;i++) {
    if(i%7 == 0) {
        number_sequence += i + " ";
        console.log(number_sequence);
        number_sequence += i;
        count++;
        if(count == 30) {
            break;
        }
    }
}
document.write(number_sequence +"<br>");
document.write("Tổng bằng " + number_sequence);