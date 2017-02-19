// Inetialication file of an application

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
//console.log(notes.add(12, 12));
//const os = require('os');

// console.log(_.isString('simran grewal'));
// console.log(_.isString(true));
// var user =  os.userInfo();
//
// var fa = _.uniq(['simran', 1, 1, 'harman', 'simran', 2]);
// console.log(fa);
// //console.log(user);
// fs.appendFile('greeting.txt', `Hello ${user.username} you are ${notes.age}`);

// var res = notes.add(5, 10);
// console.log(res);

const argv = yargs.argv;
var commandLine =  argv._[0];
// console.log('Command =', commandLine);
// console.log('Process=', process.argv);
// console.log('yargs', argv);
if (commandLine === 'add')
{
    var note = notes.addNote(argv.title, argv.body);
    if(note)
    {
      console.log('Note is created');
      notes.logNote(note);
    }
    else {
      console.log('Note is already in use');
    }
}
else if(commandLine === 'list')
{
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
}
else if(commandLine === 'read'){
  var note  = notes.getNote(argv.title);
  if(note)
  {
    console.log('Read successfully');
    notes.logNote(note);

  }
  else {
    console.log('No note found');
  }
}
else if(commandLine === 'remove')
{
    var note = notes.removeNote(argv.title);
    if(note)
    {
      console.log('Note is successfully removed');
    }
    else {
    console.log('Note is not removed successfully');
    }
}
else {
  console.log('Command not recongnize');
}
