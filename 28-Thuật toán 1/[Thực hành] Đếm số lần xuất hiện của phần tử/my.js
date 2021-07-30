function dispArr(arr) {
    let str = '';
    for (let i = 0; i < arr.length; ++i) {
        str += `${arr[i]}\t`;
        if (i % 10 == 9) {
            str += "<br>";
        }
    }
    document.write(str);
}

function binSearch(arr, left, right, data) {
    if (right >= left) {
        let mid = parseInt(left + (right - left) / 2);
        if (arr[mid] == data)
            return mid;

        if (arr[mid] > data)
            return binSearch(arr, left, mid - 1, data);

        return binSearch(arr, mid + 1, right, data);
    }
    return -1;
}

function count(arr, data) {
    let count = 0;
    let position = binSearch(arr, 0, arr.length - 1, data);
    if (position > -1) {
        ++count;
        for (let i = position - 1; i > 0; i++) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
        for (let i = position - 1; i < arr.length; i++) {
            if (arr[i] === data) {
                ++count
            } else {
                break;
            }
        }
    }
    return count;
}

let nums = [];
for (let i = 0; i < 100; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}

function insertionsort(arr) {
    let j;
    for (let i = 1; i < arr.length; i++) {
        j = i - 1;
        temp = arr[i];
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}

insertionsort(nums);
dispArr(nums);
document.write("<br/>");
let val = parseInt(prompt("Enter a value to count"));
let retVal = count(nums, val);
document.write("Found " + retVal + " occurrences of " + val + ".");