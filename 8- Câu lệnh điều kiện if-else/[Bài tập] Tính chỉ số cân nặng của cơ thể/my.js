function BMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    bmi = weight/ (height*height) ;

    if(bmi<16){
        document.getElementById("BMI").innerHTML = "Gầy 3";
    }
    else if(16<=bmi && bmi<=17){
        document.getElementById("BMI").innerHTML = "Gầy 2";
    }
    else if(17<=bmi && bmi<=18.5){
        document.getElementById("BMI").innerHTML = "Gầy 1";
    }
    else if(18.5<=bmi && bmi<=25){
        document.getElementById("BMI").innerHTML = "Bình thường";
    }
    else if(25<=bmi && bmi<=30){
        document.getElementById("BMI").innerHTML = "Hơi béo";
    }
    else if(30<=bmi && bmi<=35){
        document.getElementById("BMI").innerHTML = "Béo phì cấp độ 1";
    }
    else if(35<=bmi && bmi<40 ){
        document.getElementById("BMI").innerHTML = "Béo phì cấp độ 2";
    }
    else{
        document.getElementById("BMI").innerHTML = "Béo phì cấp độ 3";
    }
}