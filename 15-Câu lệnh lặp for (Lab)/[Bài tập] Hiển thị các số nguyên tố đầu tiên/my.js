function checkPrimeNumbers(n) {
    if(n<2){
        return false;
    }
    else if(n==2){
        return true;
    }
    else if(n%2==0){
        return false;
    }
    else{
        for(let i=3; i<Math.sqrt(n); i+=2){
            if(n%1==0){
                return false;
                break;
            }
        }
    }
    return true
}

let n = prompt("Nhập số nguyên tố đầu tiên bạn muốn in ra",'');
let count = 0;
let number = 2;
let result = "";
while(count<n){
    if(checkPrimeNumbers(number)){
        count +=1;
        result = result + `<span>${number} ;</span>`
    }
    number +=1;
}
document.write(result);