function check() {
    let mathScore = +document.getElementById('math').value;
    let literatureScore = +document.getElementById('literature').value;
    let englishScore = +document.getElementById('english').value;

    let KV = document.getElementById('area').value;
    switch(KV) {
        case "KV1" :
            result = mathScore + literatureScore + englishScore + 0.75 ;
            break;
        case "KV2" :
            result = mathScore + literatureScore + englishScore + 0.25 ;
            break;
        case "KV2-NT" :
            result = mathScore + literatureScore + englishScore + 0.5 ;
            break;
        case "NV3" :
            result = mathScore + literatureScore + englishScore + 0 ;
            break;
    }

    document.getElementById('result').innerHTML = "Tong Diem la: " + result;
}