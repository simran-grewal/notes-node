// module.exports.add = (a, b) =>{
//   return a + b;
// }
const fs = require('fs');
var fetchNotes = () => {
  // try because first time the file will not exist
  try
  {
    var notesString = fs.readFileSync('notes-data.json');//  to retain old data
    return JSON.parse(notesString);
  }
  catch(e)
  {
    return [];
  }
};

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {title,body};
  // Now going to check is there any duplicate note exist or not,this function
  //will check title one by one from array
  // var duplicateNotes = notes.filter((note) =>{
  //     return note.title === title;
  //     ///console.log(yes.title);
  // });
  //or according to es6
   var duplicateNotes = notes.filter((note) => note.title === title);

      if(duplicateNotes.length === 0)
      {
      notes.push(note);
      saveNotes(notes);
      return note;
      }
};
var getAll = () =>{
  return fetchNotes();
}
var getNote = (title) =>{

  var notes = fetchNotes();
  var read = notes.filter((note) => note.title === title)
  if(read.length > 0)
  {
    return read[0];
  }
}
var removeNote = (title) =>{
  // fetch notes
  // filter the note, removing one with title of aurgument
  // save nots in array
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title !== title);
  saveNotes(filterNotes);

  return notes.length !== filterNotes.length;
}
var logNote = (note) =>{
  debugger;
  console.log('-------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
