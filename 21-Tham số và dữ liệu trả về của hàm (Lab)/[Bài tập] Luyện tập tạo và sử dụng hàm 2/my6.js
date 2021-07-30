function bai6() {
    let kytu = prompt("Nhap vao ki tu kiem tra")
    let check = kiemtrakytunguyenam(kytu)
    if (check == true) {
        alert(kytu+ " Day la ky tu so nguyen am")
    } else {
        alert(kytu+ " Khong phai la ky tu nguyen am")
    }
}
function kiemtrakytunguyenam(kytu) {
    if(/[a-zA-Z]/.test(kytu) ){
        return true
    }
    return false
}