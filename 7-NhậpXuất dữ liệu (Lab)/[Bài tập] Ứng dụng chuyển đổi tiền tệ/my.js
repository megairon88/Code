function converMoney() {
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('from_currency').value;
    let toCurrency = document.getElementById('to_currency').value;

    result = amount * toCurrency / fromCurrency ;

    document.getElementById('result').innerHTML = "Ket qua la: " + result ;
}