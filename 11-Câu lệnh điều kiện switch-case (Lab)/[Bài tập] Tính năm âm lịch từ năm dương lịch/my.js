function checkYear() {
    let year = document.getElementById('year').value;
    let can = year % 10;
    let chi = year % 12;
    let text = '';

    switch(can) {
        case 0:
            text ='Canh';
            break;
        case 1:
            text ='Tân';
            break;
        case 2:
            text ='Nhâm';
            break;
        case 3:
            text ='Quý';
            break;
        case 4:
            text ='Giáp';
            break;
        case 5:
            text ='Ất';
            break;
        case 6:
            text ='Bính';
            break;
        case 7:
            text ='Đinh';
             break;
        case 8:
            text ='Mậu';
            break;
        case 9:
            text ='Kỷ';
            break;
    }

    switch(chi) {
        case 0:
            text +=' Thân';
            break;
        case 1:
            text +=' Dậu';
            break;
        case 2:
            text +=' Tuất';
            break;
        case 3:
            text +=' Hợi';
            break;
        case 4:
            text +=' Tý';
            break;
        case 5:
            text +=' Sửu';
            break;
        case 6:
            text +=' Dần';
            break;
        case 7:
            text +=' Mẹo';
             break;
        case 8:
            text +=' Thìn';
            break;
        case 9:
            text +=' Tỵ';
            break;
        case 10:
            text +=' Ngọ';
            break;
        case 11:
            text +=' Mùi';
            break;
    }

    document.getElementById('result').innerHTML = 'Năm âm lịch là: ' + text
}