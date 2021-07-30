let html = "";
for (let i = 2; i < 10; i++) {
    html += "<tr>";
    for(let j = 1; j < 10; j++) {
        tich = i*j;
        html += "<td>" + i + "x" + j + "=" + tich + "</td>";
    }
    html += "</tr>";
}
document.getElementById("bang_cuu_chuong").innerHTML = html;