// var obj = {
//   name: 'simranjit singh',
//   Age: 22
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(stringObj);
// var personString = '{"name":"simran","age":22}';
// var person = JSON.parse(personString);
// console.log(person);
const fs = require('fs');
var originalNote = {
  title: 'some title',
  body: 'some body'
};
var stringObj = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', stringObj);
var p = fs.readFileSync('notes.json');
var note = JSON.parse(p);
console.log(note);
