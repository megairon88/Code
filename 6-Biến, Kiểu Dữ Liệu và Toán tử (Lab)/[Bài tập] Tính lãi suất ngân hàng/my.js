let inputMoney ;
let inputInterest_rate ;
let inputYear ;

inputMoney = prompt("Nhap vao so tien");
inputInterest_rate = prompt("Nhap vao lai suat ngan hang");
inputYear = prompt("Nhap vao nam");

let n = parseInt(inputMoney);
let i = parseFloat(inputInterest_rate);
let y = parseInt(inputYear);

let sum = n + (y * i) ;
document.write("So tien phai tra sau " + y + " nam la :" + sum);