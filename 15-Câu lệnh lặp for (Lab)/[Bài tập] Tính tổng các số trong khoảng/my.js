let a = +prompt("Nhập số a :","");
let b = +prompt("Nhập số b :","");
let sum = 0;
for(let i=a; i<=b; i++){
    if(i == 1){
        continue;
    }
    let check = 0;
    for(let j = 2; j <= Math.sqrt(i); j++){
        if(i % j == 0){
            check = 1;
            break;
        }
    }
    if(check == 0){
        sum += i;
    }
}
alert(`Tổng tất cả số nguyên tố trong khoảng từ a đến b la: ${sum}`);