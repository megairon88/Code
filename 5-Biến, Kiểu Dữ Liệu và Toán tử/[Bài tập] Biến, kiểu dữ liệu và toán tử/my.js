let inputPhysics;
let inputChemistry;
let inputBiology;

inputPhysics = prompt("Enter the Physics");
inputChemistry = prompt("Enter the Chemistry");
inputBiology = prompt("Enter the Biology");

let Physics = parseInt(inputPhysics);
let Chemistry = parseInt(inputChemistry);
let Biology = parseInt(inputBiology);

let pass = (Physics + Chemistry + Biology)/3;
let sum = Physics + Chemistry + Biology;

document.write("điểm trung bình : " +pass );
document.write(" tổng điểm : " +sum );
