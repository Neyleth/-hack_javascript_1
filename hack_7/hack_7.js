/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = [];
for (i in arr) {
    result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
}


//export result
module.exports = result;