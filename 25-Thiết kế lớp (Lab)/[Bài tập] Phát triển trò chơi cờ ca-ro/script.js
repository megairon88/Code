let position = {
    X: null,
    Y: null
  }
let isWon = false;
let squares = 20;

// tao bang va Event
window.onload = () => {
makeTable();
select();
};

function checkWinCondition(var1, var2, var3, var4, var5) {
return (var1 && var2 && var3 && var4 && var5 && var1 == var2 && var1 == var3 && var1 == var4 && var1 == var5);
}

function debug(var1, var2, var3, var4, var5) {
console.log(`${var1} ${var2} ${var3} ${var4} ${var5}`);
}

// Tạo bảng
function makeTable() {
let table = '';
for (let i = 1; i <= squares; i++) {
  table += "<tr>";
  for (let j = 1; j <= squares; j++) {
    table += `<td><input type="button" data-position="${j},${i}" value="" class="select"></td>`;
  }
  table += "</tr>";
}

document.getElementById('table').innerHTML = table;
}

// Choi lai
function reset() {
makeTable();
select();
isWon = false;
}

// Lay toa do o chon
function getPosition(item) {
position.X = parseInt(item.dataset.position.split(',')[0]);
position.Y = parseInt(item.dataset.position.split(',')[1]);
console.log(position);
console.log(item.value);
return position;
}

// Kiem tra duong thang
function checkLine(a, b) {
// Check Line Horizontal
for (let i=a-2; i<=a+2; i++) {
  let select1 = document.querySelector(`input[data-position="${i-2},${b}"]`);
  let select2 = document.querySelector(`input[data-position="${i-1},${b}"]`);
  let select3 = document.querySelector(`input[data-position="${i},${b}"]`);
  let select4 = document.querySelector(`input[data-position="${i+1},${b}"]`);
  let select5 = document.querySelector(`input[data-position="${i+2},${b}"]`);

  if (select1==null || select2==null || select3==null || select4==null || select5==null) 
    continue;
  else if (checkWinCondition(select1.value, select2.value, select3.value, select4.value, select5.value)) {
    isWon = true;
    break;
  }
}

// Check Line Vertical
for (let i=b-2; i<=b+2; i++) {
  let select1 = document.querySelector(`input[data-position="${a},${i-2}"]`);
  let select2 = document.querySelector(`input[data-position="${a},${i-1}"]`);
  let select3 = document.querySelector(`input[data-position="${a},${i}"]`);
  let select4 = document.querySelector(`input[data-position="${a},${i+1}"]`);
  let select5 = document.querySelector(`input[data-position="${a},${i+2}"]`);

  if (select1==null || select2==null || select3==null || select4==null || select5==null) 
    continue;
  else if (checkWinCondition(select1.value, select2.value, select3.value, select4.value, select5.value)) {
    isWon = true;
    break;
  }
}
}

// Kiem tra duong cheo
function checkDiagonal(a, b) {
// Check Main Diagonal
for (let i=b-2; i<=b+2; i++) {
  let select1 = document.querySelector(`input[data-position="${(i-2)+(a-b)},${i-2}"]`);
  let select2 = document.querySelector(`input[data-position="${(i-1)+(a-b)},${i-1}"]`);
  let select3 = document.querySelector(`input[data-position="${i+(a-b)},${i}"]`);
  let select4 = document.querySelector(`input[data-position="${(i+1)+(a-b)},${i+1}"]`);
  let select5 = document.querySelector(`input[data-position="${(i+2)+(a-b)},${i+2}"]`);

  if (select1==null || select2==null || select3==null || select4==null || select5==null) 
    continue;
  else if (checkWinCondition(select1.value, select2.value, select3.value, select4.value, select5.value)) {
    isWon = true;
    break;
  } 
}

// Check Second Diagonal
for (let i=a-2; i<=a+2; i++) {
  let select1 = document.querySelector(`input[data-position="${i-2},${(a+b)-(i-2)}"]`);
  let select2 = document.querySelector(`input[data-position="${i-1},${(a+b)-(i-1)}"]`);
  let select3 = document.querySelector(`input[data-position="${i},${(a+b)-i}"]`);
  let select4 = document.querySelector(`input[data-position="${i+1},${(a+b)-(i+1)}"]`);
  let select5 = document.querySelector(`input[data-position="${i+2},${(a+b)-(i+2)}"]`);

  if (select1==null || select2==null || select3==null || select4==null || select5==null) 
    continue;
  else if (checkWinCondition(select1.value, select2.value, select3.value, select4.value, select5.value)) {
    isWon = true;
    break;
  }
}
}

// Chon o
function select() {
let isX = true;
position = {
  X: null,
  Y: null
};

document.querySelectorAll('input.select').forEach((item) => {
  item.addEventListener('click', () => {
    if (isX && item.value=='') { 
      item.style.color = 'blue';
      item.value = "x";
      isX = false;
      getPosition(item);
      checkLine(position.X,position.Y);
      checkDiagonal(position.X,position.Y);
      if (isWon) alert('Player X WIN!');
    }
    else if (item.value=='') {
      item.style.color = 'red';
      item.value = "o";
      isX = true;
      getPosition(item);
      checkLine(position.X,position.Y);
      checkDiagonal(position.X,position.Y);
      if (isWon) alert('Player O WIN!');        
    }
  });
});
}

// [EVENT] Reset
document.getElementById('reset').addEventListener('click', reset);