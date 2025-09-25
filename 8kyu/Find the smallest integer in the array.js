/*
* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
* */

function findSmallestInt(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

let arr = [1,2,3,4,-12];

console.log(findSmallestInt(arr));