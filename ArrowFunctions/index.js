//Arrow Functions
//Example 1

// const sayHello = (name, greetings) => {
//     console.log(greetings + " " + name);
// }

// sayHello('Aashir', 'Good Morning');

//---------------------------------------
//Example 2 //this return current object
//---------------------------------------

// const Person = {
//   name: "Aashir",
//   role: "DevOps Engineer",
//   age: 22,
//   showDetails: function(){
//     console.log(`My name is ${this.name}`)
//   }
// }

// Person.showDetails();


//---------------------------------
//Example 3: Lexical Scope
//---------------------------------

// const Person = {
//   name: "Aashir",
//   role: "DevOps Engineer",
//   age: 22,
//   showDetails: function(){
//     console.log(this);
//     setTimeout(() => {
//       console.log(`My name is ${this.name} \nRole is ${this.role}`)      
//     }, 2000);
//   }
// }

// Person.showDetails();