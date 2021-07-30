function setOutput(number) {
    document.getElementById('output').value += number;
}

function cal() {
    let input =  document.getElementById('output').value;

    //ham eval() tinh toan bieu thuc string
    result = eval(input);

    document.getElementById('output').value = result;
}