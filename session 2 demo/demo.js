// Declaring a variable and printing it
var newvar = "Hello World!";
console.log(newvar);
// Declaring a function
function add(a, b) {
    return a + b;
}
// Calling a function and printing results
var result = add(5, 3);
console.log(result);
var rain = true;
if (rain == true) {
    console.log("It is raining, take a umbrella!");
}
else {
    console.log("It is sunny outside!");
}
var aazel = {
    name: "Aazel Tan", // corrected the quotes
    age: 19,
    sleep: function () {
        console.log("zzz"); // corrected the quotes
    }
};
// obj.propertyName
var myName = aazel.name; // corrected the variable reference
console.log(myName); // prints "Aazel Tan"
aazel.name = "Sneha";
console.log(aazel.name); // prints "Sneha"
// Calling the sleep method
if (aazel.sleep) {
    aazel.sleep(); // prints "zzz"
}
var nums = [1, 2, 3, 4];
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var element = nums_1[_i];
    console.log(element);
    //other statements
}
