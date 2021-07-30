function giaiThua(so) {
    let giai_thua = 1
    if (so >= 1) {
        for (let i = 1; i <= so; i++) {
            giai_thua = giai_thua * i
        }
    } else if (so == 0) {
        giai_thua = 1
    } else {
        return "Giai thua khong xac dinh duoc"
    }
    return giai_thua
}
function bai3() {
    let so = Number(prompt("Nhap vao mot so"))
    let gt = giaiThua(so)
    document.write("Giai thua cua " +so+ "=" +gt)
}