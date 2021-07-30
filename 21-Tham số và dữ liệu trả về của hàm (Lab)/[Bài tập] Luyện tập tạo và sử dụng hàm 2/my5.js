function timMin(mang_so) {
    let backup
    for (let i=0; i<mang_so.length; i++){
        backup = mang_so[0]
        if (mang_so[i]< backup){
                backup = mang_so[i]
        }
    }
    return backup
}
function bai5() {
    let mang_so = []
    for (let i = 0; i < 3;  i++) {
        mang_so.push(Number(prompt("Nhap vao mang so thu " +i)))
    }
    let min = timMin(mang_so)
    document.write("Mang so gom ["+mang_so+"] <br>")
    document.write("So nho nhat trong day la " +min)
}