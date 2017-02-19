// arrow function
// var square = (x) =>{
//  var result = x*x;
//  return result;
// };
var square = (x) => x*x; // only one argument we can leave the () i.e
// var square = => x*x;
console.log(square(9));

var user = {
  name:'simran',
  sayHi: () => {
    console.log(`Hi`); // we cannot use this keyboard and arguments keyboard in arrow functions 
  },
  sayAlt (){
    console.log(arguments);
    console.log(`Hi i am ${this.name}`);
  }
}

user.sayAlt('Simran', 'Grewal');
