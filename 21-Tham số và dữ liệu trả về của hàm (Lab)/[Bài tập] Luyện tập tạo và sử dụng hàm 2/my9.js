function bai9() {
    let mang = ['q','w','e','r','t','y','u','i','o','p']
    let kytu = prompt("nhap mot ky tu bat ky")
    document.write("Mang gom ["+mang+"]<br>")
    let kiemtra = kiemtratrongmang(kytu,mang)
    if (kiemtra > 0) {
        document.write("Co " +kiemtra+ " ky tu " +kytu+ " trong mang ")
    } else {
        document.write("Khong co du lieu trong mang")
    }
}
function kiemtratrongmang(kytu,mang) {
    let dem = 0
    for (let i=0; i<=mang.length; i++) {
        if (kytu == mang[i]) {
            dem++
        }
    }
    if (dem>0) {
        return dem
    }
    return -1
}