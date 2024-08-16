/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = [];
result.push(arr[1], arr[2], arr[3]);
result = result.map(item => item.replace(/a/g, '@'));
result[result.length - 1] = result[result.length - 1].toUpperCase();
console.log(result);

//export result
module.exports = result;