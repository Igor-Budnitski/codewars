/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/

let arr = [1,2,'3',4];

function sumMix(x){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== Number){
            sum += parseInt(arr[i]);
        }
    }
    return sum;
}

console.log(sumMix(arr));