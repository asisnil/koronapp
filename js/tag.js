let tagaros = document.querySelector(".tags");
let addTagBtn = document.querySelector(".newTag");
let tagListss = [];/* = JSON.parse(localStorage.getItem('tag'));*/

if (localStorage.getItem("tag") !== null) {
  tagListss = JSON.parse(localStorage.getItem('tag'));
};
var tagsArray = [];

var realTags = tagListss.concat(tagsArray);

const addNewTag = () => {
  let newTagInp = document.getElementById("new-tag").value;
  if(newTagInp.length !==0){
  realTags.push(newTagInp);
  console.log(realTags);
  let tagsArrayJson = JSON.stringify(realTags);
  localStorage.setItem("tag",tagsArrayJson);
  window.location.reload();
  clear();}
  else{
    alert("Empty!");
  }
}

const displayTags = () => {
  let tagLists = [];
  if (localStorage.getItem("tag") === null) {
  void(0);
}
else{
  tagLists = JSON.parse(localStorage.getItem('tag'));
};
  for(let i = 0;i<tagLists.length;i++){
   let tagLi = document.createElement("li");
  tagLi.appendChild(document.createTextNode(tagLists[i]));
  tagaros.appendChild(tagLi);
  }
}
displayTags();