function findMin (arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let nums = [];
for(let i = 0;i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
let minValue = findMin(nums);
function dispArr(nums) {
    for (i =0; i < nums.length; i++) {
        document.write(nums[i] + " ");
        if((i+1)%10 ===0){
            document.write('<br/>');
        }
    }
};
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let maxValue = findMax(nums);
dispArr(nums);
document.write("<br/>");
document.write("Minimum value: " + minValue);
document.write("<br/>");
document.write("Maximum value: " + maxValue);