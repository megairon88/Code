let res = document.getElementById("result");
function Temperature(c){
    this.tempC = c;
    this.convertCtoF = function() {
        res.innerHTML = `${c} do C = ${(this.tempC*1.8)+32} do F   <br>`
    }
    
    this.convertCtoK = function() {
        res.innerHTML += `${c} do C = ${this.tempC + 273 } do K`
    }
}
let temp = new Temperature(25);
temp.convertCtoF();
temp.convertCtoK();