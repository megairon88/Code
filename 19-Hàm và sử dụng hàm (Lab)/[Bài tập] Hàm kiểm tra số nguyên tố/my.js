function isPrime(number) {
    if(number<=1) {
        return false;
    } else if(number == 2 || number == 3) {
        return true;
    } else if(number %2 == 0 ) {
        return false;
    } else {
        for (i=3; i<number; i+=2) {
            if(number%i == 0) {
                return false;
            }
        }
    }
    return true;
}

function soNguyenTo() {
    let so = document.getElementById("nhapso");
    let kiemtra = isPrime(so.value);
    if(kiemtra) {
        alert(so.value+ " là một số nguyên tố");
    } else {
        alert(so.value+ " không phải số nguyên tố");
    }
}