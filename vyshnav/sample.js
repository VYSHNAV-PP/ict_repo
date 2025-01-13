console.log("Hello World")

var x = 30
console.log(x)

let a = 10
console.log(a)
{
    let a = 20
    console.log(a)
}
console.log(a)

const b = 111
console.log(b)
{
    const b = 222
    console.log(b)
}
if (a == b) {
    console.log("true")
}
else {
    console.log("false")
}



let temp=30
if (temp < 20) {
    console.log("cold day")
}
else if (temp > 20 && temp < 30) {
    console.log("normal day")
}
else {
    console.log("hot day")
}


function hello(name) {
    console.log("hello "+ name)
}
hello("hi");

function sum(a, b) {
    return a+b
}
let c = sum(3, 4)
console.log("sum =" + c)

var add = (a, b) => { a + b } 
console.log(add(4, 6))

let person = {
    name: "yes",
    age: 40,
    occupation: "Engineer"
    
}
console.log(person.name)

let people=[
    { name: "yes", age: 40, occupation: "Engineer" },
    { name: "hello", age: 45, occupation: "Engineer" },
    { name: "no", age: 43, occupation: "Engineer" }


]
console.log(people[0].age)