function addition() {
    let A = +document.getElementById('number_1').value;
    let B = +document.getElementById('number_2').value;

    result = A + B ;
    document.getElementById('result').innerHTML = "Tong bang: " + result;
}
function subtraction() {
    let A = +document.getElementById('number_1').value;
    let B = +document.getElementById('number_2').value;

    result = A - B ;
    document.getElementById('result').innerHTML = "Tong bang: " + result;
}
function multiplication() {
    let A = +document.getElementById('number_1').value;
    let B = +document.getElementById('number_2').value;

    result = A * B ;
    document.getElementById('result').innerHTML = "Tong bang: " + result;
}
function division() {
    let A = +document.getElementById('number_1').value;
    let B = +document.getElementById('number_2').value;

    result = A / B ;
    document.getElementById('result').innerHTML = "Tong bang: " + result;
}