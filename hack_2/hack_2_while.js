/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];
let i = 1;
while (i < 6) {
    result.push(i);
    i++;
}
console.log(result);

//export result
module.exports = result;