function feetConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputMeters").innerHTML = (valNum) * 0.305;
}

function metersConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFeet").innerHTML = (valNum) * 3.279;
}