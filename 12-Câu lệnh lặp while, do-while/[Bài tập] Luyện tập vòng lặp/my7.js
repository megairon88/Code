function print_number(){
    let n = +document.getElementById('number').value; 
    let text = '';
    for (i=1; i<=n; i++){
        if (i%3==0 && i%5==0){
            number = "<b>FizzBuzz</b>";
        } else if (i%3==0){
            number = '<b>Fizz</b>';
        } else if (i%5==0){
            number = '<b>Buzz</b>';
        } else {
            number = i;
        }
        text +=number +' '
    }

    document.getElementById('result').innerHTML=text;