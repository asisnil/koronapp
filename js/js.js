const body = document.getElementById("bodyId");
const addNote = document.querySelector(".add-note");
const sortItems = document.querySelector(".sort-items");
const tags = document.querySelector(".tag-items");
const moreItems = document.querySelector(".more-items");
const aboutItems = document.querySelector(".about-items");
const backupItems = document.querySelector(".backup-items");
const nav = document.querySelector(".navigation");


const overLay = document.querySelector(".overlay");
const cross = document.querySelector(".cross");
const addBtn = document.getElementById("add-btn");
const tagBtn = document.getElementById("tag-btn");
const themeBtn = document.getElementById("theme-btn");
const sortBtn = document.getElementById("sort-btn");
const moreBtn = document.getElementById("more-btn");
const cancelBtn = document.getElementById("cancel");
const aboutBtn = document.getElementById("about-page-btn");
const backupBtn = document.getElementById("backup-btn");
addBtn.onclick = function() {
  addNote.style.display = "flex";
  overLay.style.display = "block";
  cross.style.display = "flex";
  body.style.overflow = "hidden";
};
tagBtn.onclick = function() {
  tags.style.display = "flex";
  overLay.style.display = "block";
  cross.style.display = "flex";
  tags.style.opacity = "1";
  body.style.overflow = "hidden";
};
moreBtn.onclick = function() {
  moreItems.style.display = "flex";
  overLay.style.display = "block";
  cross.style.display = "flex";
  moreItems.style.opacity = "1";
  body.style.overflow = "hidden";
};
sortBtn.onclick = function() {
  sortItems.style.display = "flex";
  overLay.style.display = "block";
  cross.style.display = "flex";
  sortItems.style.opacity = "1";
  body.style.overflow = "hidden";
};
aboutBtn.onclick = function() {
  aboutItems.style.display = "flex";
  overLay.style.display = "block";
  cross.style.display = "flex";
  aboutItems.style.opacity = "1";
  moreItems.style.display = "none";
};
backupBtn.onclick = function() {
  backupItems.style.display = "flex";
  overLay.style.display = "block";
  cross.style.display = "flex";
  backupItems.style.opacity = "1";
  moreItems.style.display = "none";
};
cancel.onclick = function(){
  aboutItems.style.display = "none";
  addNote.style.display = "none";
  tags.style.display = "none";
  moreItems.style.display = "none";
  overLay.style.display = "none";
  cross.style.display = "none";
  sortItems.style.display = "none";
  backupItems.style.display = "none";
  body.style.overflow = "auto";
};