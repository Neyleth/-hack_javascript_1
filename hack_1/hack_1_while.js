/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];
let i = 0;
while (i < 6) {
    result.push(i);
    i++;
}
console.log(result);

//export result
module.exports = result;