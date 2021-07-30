function tinhtong(a,b) {
    if(a>b) {
        return "Gia tri a > b xin nhap lai"
    }
    return a + b
}  
function bai3() {
    let a = Number(prompt("Nhap so a"))
    let b = Number(prompt("Nhap so b"))
    document.write("Tong cua " +a+ "+" +b+ "=" + tinhtong(a,b))   
}