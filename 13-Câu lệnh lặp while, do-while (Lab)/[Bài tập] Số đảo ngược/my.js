let n = +prompt("nhap vao mot so: ");
document.write("so dao nguoc la: ");
while(n!=0) {
    document.write(n%10);
    n=parseInt(n/10);
}