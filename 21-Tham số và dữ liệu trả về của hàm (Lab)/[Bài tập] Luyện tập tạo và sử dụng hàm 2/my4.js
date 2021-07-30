function kiemtrasohaychuoi(i) {
    if (i%2 == 0 || i%2 == 1) {
        return true
    }
    return false
}
function bai4() {
    let i = prompt("Nhap vao ")
    let check = kiemtrasohaychuoi(i)
    if (check) {
        alert("Day la so")
    } else {
        alert("Day la chuoi")
    }
}