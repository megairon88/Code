do {
    value = prompt("thông tin nhiệt độ hiện tại");
} while (value < 0 || value > 200);

if (value > 100) {
    alert("giảm nhiệt độ");
} else if (value < 20) {
    alert("tăng nhiệt độ");
}