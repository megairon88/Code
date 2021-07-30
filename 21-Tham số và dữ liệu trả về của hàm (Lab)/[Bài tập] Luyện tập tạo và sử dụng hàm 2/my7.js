function bai7() {
    let so_a = prompt("Nhap so thu nhat")
    let so_b = prompt("Nhap so thu hai")
    let ketqua = doichohaiso(so_a,so_b)
    document.write("Doi cho hai so: " +ketqua[0]+ "," +ketqua[1])
}
function doichohaiso(so_a,so_b) {
    let mang = [so_b,so_a]
    return mang
}