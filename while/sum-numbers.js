

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let num = 81;
let sum = 0;
while (num <= 131) {
    if(num % 2 === 1){
        sum = sum + num;
        console.log(num);
    }
    num++;
}
console.log('sum of number from 81 to 132 is :', sum)
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let n = 206;
let total = 0;
while(n <= 311){
    if(n % 2 === 0){
        total = total + n;
        console.log(n);
    }
    n++;
}
console.log('total of number from 206 to 311 :', total)