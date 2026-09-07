const First_name = "G.N.";
const Last_name = "Naidu";
let age = 64;

const introduction = `Hello my Name is ${First_name} ${Last_name} and I am ${age} years old.`;

function greeting(name = "guest")
{
    console.log(`Hello ${name}! Have a great day.`);
}

console.log(introduction);
greeting("kishan");
greeting();
