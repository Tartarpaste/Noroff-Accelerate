let outerNumber = 9;
let person = {
  name: "Timothy",
};

console.log(person);

changeSomething(outerNumber, person);

function changeSomething(number, object) {
  number++;

  object.name = "Timmy";

  console.log(number);
  console.log(object);
}

console.log(outerNumber);
console.log(person);
