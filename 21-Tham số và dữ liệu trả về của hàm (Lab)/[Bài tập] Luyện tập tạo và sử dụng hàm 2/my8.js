function bai8() {
    let mangso = [1,2,3,4,5,6,7]
    document.write("Mang so gom mang ["+mangso+"]<br>")
    let daoMang = daoMangso(mangso)
    document.write("Doi cho mang so mang doi ["+daoMang+"]")
}
function daoMangso(mangso) {
    return mangso.reverse()
}