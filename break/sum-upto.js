/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum = 0;
for(let n = 1; n < 100; n++){
    sum = sum + n;
    if(sum > 100 ){
        console.log(sum);
        break;
    }
    console.log(n);
}
