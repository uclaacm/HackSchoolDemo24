// Before Prettier
function greet( name: string ){console.log( "Hello, " + name )}
const people = [ "Alice", "Bob", "Charlie" ];for (let i=0;i<people.length;i++){greet(people[ i ] );}

// After Prettier
function greet(name: string) {
  console.log("Hello, " + name);
}

const people = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < people.length; i++) {
  greet(people[i]);
}
