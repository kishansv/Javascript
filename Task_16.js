let g = "global";

function scope()
{
    let l = "local";
    console.log(g);
    console.log(l);
}

scope();
console.log(g);

console.log("\n");

let person = ["director","hero"];

person.push("heroine");
console.log(person);

person.pop();
console.log(person);

person.shift();
console.log(person);

person.unshift("producer");
console.log(person);

console.log("\n");

let numbers = [1,2,3,4,5];
for(let i=0; i<5; i++)
{
    console.log(numbers[i]);
}
