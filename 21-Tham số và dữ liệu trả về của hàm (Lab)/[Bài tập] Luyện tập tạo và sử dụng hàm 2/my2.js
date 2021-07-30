function dienTich(r,pi) {
    let S = r*r*pi
    return S
}
function chuVi(r,pi) {
    let C = 2*r*pi
    return C
}
function bai2() {
    const pi = 3.14
    let r = Number(prompt("Nhap ban kinh hinh tron"))
    let chuvi = chuVi(r,pi)
    let dientich = dienTich(r,pi)
    document.write("Chu vi hinh tron la " +chuvi+ "<br>")
    document.write("Dien tich hinh tron la " +dientich)
}