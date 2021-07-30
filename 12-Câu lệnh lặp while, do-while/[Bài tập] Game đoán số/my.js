let range = Number(prompt("Trò chơi đoán số từ 0 - "));
let input_number = Number(prompt("Nhập vào số muốn đoán"));
let number_random;
if(range){
    soRamdom = Math.floor(Math.random()*range);
    if(number_random == input_number){
        alert("Bạn đã đoán đung");
    }else{
        while (number_random != input_number){
            alert("Bạn đoán sai số đúng là "+number_random);
            input_number = Number(prompt("Nhập vào số muốn đoán"));
        }
        alert("Bạn đoán đúng");
    }
}