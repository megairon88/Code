function isPalindrome(chuoi) {
    chuoi = prompt("Nhap chuoi")
    let dai = chuoi.length -1
    let check
    for (let i=0; i<chuoi.length; i++) {
        if (chuoi[i] == chuoi[dai]) {
            dai--
            check = true
            console.log(chuoi[i] +" - "+ chuoi[dai])
        } else {
            check = false
            console.log(chuoi[i] +" - "+chuoi[dai])
            break
        }
    }
    if (check == true) {
        alert(chuoi+" Day la tu doi xung")
    } else {
        alert(chuoi+ " Khong phai tu doi xung")
    }
    return isPalindrome(chuoi)
}