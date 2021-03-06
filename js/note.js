function clear() {
     document.getElementById("add-note-input").value = "";
     document.getElementById("add-note-text").value = "";
     document.getElementById("new-tag").value = "";
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
  window.location.reload();
  clear();
}


function getNotesFunction(){
  var values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- ) {
        if(keys[i].length<8){
          continue;
        }
        values.push(localStorage.getItem(keys[i]));
    };
  let objValues = values.map(JSON.parse);
  return objValues;
}

let allNotesArray = getNotesFunction();

function displayNotes(){
  let notesContainer = document.querySelector(".notes");
  for(let i=0; i<allNotesArray.length;i++){

  let note = document.createElement("div");
  // note.id = allNotesArray[i].noteId;
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

  let noteEdDl = document.createElement("div");
  noteEdDl.className = "note-ed-dl-con";
  note.appendChild(noteEdDl);

  let noteDl = document.createElement("button");
  noteDl.className = "note-delete";
  let noteDlImg = document.createElement("img");
  noteDlImg.className = "note-delete-img";
  noteDlImg.id = allNotesArray[i].noteId;
  noteDlImg.src = "resource/trash-2.svg";
  noteDl.appendChild(noteDlImg);
  noteEdDl.appendChild(noteDl);
  // note.appendChild(noteDl);

  let noteEd = document.createElement("button");
  noteEd.className = "note-edit";
  let noteEdImg = document.createElement("img");
  noteEdImg.className = "note-edit-img";
  // noteDlImg.id = allNotesArray[i].noteId;
  noteEdImg.src = "resource/edit.svg";
  noteEd.appendChild(noteEdImg);
  noteEdDl.appendChild(noteEd);
  // note.appendChild(noteEd);
  }
}
displayNotes();

document.querySelector(".notes").addEventListener("click", e => {
  if (!e.target.matches(".note-delete-img")) return;
  let noteValue = (e.target.id);
  if(confirm("delete?")){
  localStorage.removeItem(noteValue);
  window.location.reload();
  }
}
, {
  passive: true
});
