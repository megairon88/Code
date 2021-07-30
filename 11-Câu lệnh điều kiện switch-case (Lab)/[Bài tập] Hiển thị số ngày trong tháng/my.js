function checkdays() {
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    if(month < 1 || month > 12) {
        document.getElementById('day').innerHTML = "Khong co thang " + month;
    } else {
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            document.getElementById('day').innerHTML = "Thang nay co 31 ngay";
        } else if(month == 4 || month == 6 || month == 9 || month == 11) {
            document.getElementById('day').innerHTML = "Thang nay co 30 ngay";
        } else {
            if(year%4 == 0 && year%100!=0 || year%400==0) {
                document.getElementById('day').innerHTML = "Thang nay co 28 ngay";
            } else {
                document.getElementById('day').innerHTML = "Thang nay co 29 ngay";
            }
        }
    }
}