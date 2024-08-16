/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1, 2, 3, 4, 5];
let stringArray = ["foo", "bar", "baz", "qux", "echo"]
let result = [];
result = numberArray.concat(stringArray);
result = result.map(item => {
    if (typeof item === 'number') {
        switch (item) {
            case 1: return "one";
            case 3: return "three";
            case 5: return "five";
            default: return item;
        }
    } else if (typeof item === 'string') {
        switch (item) {
            case "foo": return "f00";
            case "bar": return "Bar";
            case "baz": return "b@z";
            case "qux": return "quX";
            case "echo": return "3ch0";
            default: return item;
        }
    }
});
let numberArrayLength = numberArray.length;
let stringArrayLength = stringArray.length;

result.splice(numberArrayLength, 0, "h@ck");
result.push("h@ck");
result.unshift("h@ck");


//export result
module.exports = result;