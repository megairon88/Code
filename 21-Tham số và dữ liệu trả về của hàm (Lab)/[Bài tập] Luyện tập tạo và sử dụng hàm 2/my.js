function binhphuong(so) {
    let ketqua = so * so
    return ketqua
}
function bai1() {
    let so = Number(prompt("Nhap mot so tinh binh phuong"))
    let ketqua = binhphuong(so)
    document.write("Binh phuong cua " +so+ "=" +ketqua)
}