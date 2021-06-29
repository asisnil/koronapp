function clear() {
     document.getElementById("add-note-input").value = "";
     document.getElementById("add-note-text").value = "";
}

function addNewNoteFunction(){
  /*Selectors*/
  let noteTitleValue = document.getElementById('add-note-input').value;
  let noteContentValue = document.getElementById('add-note-text').value;
  let addNewNoteBtn = document.getElementById('add-new-note-btn');

  /*Get time*/
  let date = new Date();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  m = m + 1;
  let dates = d + "/" + m + "/" + y;

  /*Unique Id*/
  function uniqueID() {
  return Math.floor(Math.random() * Date.now())
  }
  let unique = "id" + uniqueID();

  let noteObject = {
    noteTitle : noteTitleValue,
    noteContent : noteContentValue,
    noteDate : dates,
    noteId : unique
  }
  let noteJson = JSON.stringify(noteObject);
  localStorage.setItem(unique, noteJson);
  addNote.style.display = "none";
  overLay.style.display = "none";
  cross.style.display = "none";
  clear();
}


function getNotesFunction(){
  var values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    };
  let objValues = values.map(JSON.parse);
  return objValues;
}

let allNotesArray = getNotesFunction();

function displayNotes(){
  let notesContainer = document.querySelector(".notes");
  for(let i=0; i<allNotesArray.length;i++){

  let note = document.createElement("div");
  note.id = allNotesArray[i].noteId;
  note.className = "note";
  notesContainer.appendChild(note);

  let noteTt = document.createElement("h3");
  noteTt.className = "note-title";
  noteTt.appendChild(document.createTextNode(allNotesArray[i].noteTitle));
  note.appendChild(noteTt);  
  
  let noteCt = document.createElement("p");
  noteCt.className = "note-content";
  noteCt.appendChild(document.createTextNode(allNotesArray[i].noteContent));
  note.appendChild(noteCt);

  let noteTi = document.createElement("p");
  noteTi.className = "note-time";
  noteTi.appendChild(document.createTextNode(allNotesArray[i].noteDate));
  note.appendChild(noteTi);

  let noteDl = document.createElement("button");
  noteDl.className = "note-delete";
  let noteDlImg = document.createElement("img");
  noteDlImg.src = "resource/trash-2.svg";
  noteDl.appendChild(noteDlImg);
  note.appendChild(noteDl);
  }
}
displayNotes();
