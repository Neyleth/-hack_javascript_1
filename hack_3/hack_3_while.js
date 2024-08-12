/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let i = 5;
while (i >= 1) {
    result.push(i);
    i--;
}
console.log(result);

//export result
module.exports = result;