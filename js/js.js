const body = document.getElementsByTagName("body");
const addNote = document.querySelector(".add-note");
const sortItems = document.querySelector(".sort-items");
const tags = document.querySelector(".tag-items");
const moreItems = document.querySelector(".more-items");
const overLay = document.querySelector(".overlay");
const cross = document.querySelector(".cross");
const addBtn = document.getElementById("add-btn");
const tagBtn = document.getElementById("tag-btn");
const themeBtn = document.getElementById("theme-btn");
const sortBtn = document.getElementById("sort-btn");
const moreBtn = document.getElementById("more-btn");
const cancelBtn = document.getElementById("cancel");

addBtn.onclick = function() {
  addNote.style.display = "flex";
  overLay.style.display = "block";
  cross.style.display = "flex";
};
tagBtn.onclick = function() {
  tags.style.display = "flex";
  overLay.style.display = "block";
  cross.style.display = "flex";
  tags.style.opacity = "1";
};
moreBtn.onclick = function() {
  moreItems.style.display = "flex";
  overLay.style.display = "block";
  cross.style.display = "flex";
  moreItems.style.opacity = "1";
};
sortBtn.onclick = function() {
  sortItems.style.display = "flex";
  overLay.style.display = "block";
  cross.style.display = "flex";
  sortItems.style.opacity = "1";
};
cancel.onclick = function(){
  addNote.style.display = "none";
  tags.style.display = "none";
  moreItems.style.display = "none";
  overLay.style.display = "none";
  cross.style.display = "none";
  sortItems.style.display = "none";
};

/*Add note*/
let addNoteBtn = document.querySelector(".newNote");
function addNoteFunc(){

  let date = new Date();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  m = m + 1;
  let dates = d + "/" + m + "/" + y;

  let notes = document.querySelector(".notes");
  let titleValue = document.getElementById("add-note-input").value;
  let textValue = document.getElementById("add-note-text").value;

  let note = document.createElement("div");
  note.classList.add('note');
  notes.appendChild(note);
  
  let noteTitle = document.createElement("h3");
  noteTitle.classList.add('note-title');
  note.appendChild(noteTitle);
  noteTitle.appendChild(document.createTextNode(titleValue));

  let noteContent = document.createElement("p");
  noteContent.classList.add('note-content');
  note.appendChild(noteContent);
  noteContent.appendChild(document.createTextNode(textValue));

  let noteTime = document.createElement("p");
  noteTime.classList.add('note-time');
  note.appendChild(noteTime);
  noteTime.appendChild(document.createTextNode(dates));


  let noteDelete = document.createElement("button");
  noteDelete.classList.add('note-delete');
  note.appendChild(noteDelete);

  let noteDeleteImg = document.createElement("img");
  noteDeleteImg.src = "/resource/trash-2.svg";
  noteDelete.appendChild(noteDeleteImg);

  let noteObject = {
    noteTitle : titleValue,
    noteContent : textValue,
    date : dates
  }

}


let deleteItem = document.querySelector(".note-delete").parentElement;
  function deleteNote(){
  deleteItem.remove();
  };