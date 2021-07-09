let tagaros = document.querySelector(".tags");
let addTagBtn = document.querySelector(".newTag");

const addNewTag = () =>{
  let newTagInp = document.getElementById("new-tag").value;
  const getRandomInt = () => {
  return Math.floor(Math.random() * 100);
};
  tagUnique = getRandomInt();
  let tagObject = {
    tagName: newTagInp,
    tagId: tagUnique
  };
  tagJson = JSON.stringify(tagObject);
  localStorage.setItem(tagUnique, tagJson);
  tags.style.display = "none";
  overLay.style.display = "none";
  cross.style.display = "none";
  window.location.reload();
  clear();
};

const getTags = () =>{
  let tagValues = [];
    let tagKeys = Object.keys(localStorage);
    let i = tagKeys.length;

    while ( i-- ) {
        if(tagKeys[i].length>8){
          continue;
        }
        tagValues.push(localStorage.getItem(tagKeys[i]));
    };
  let tagObjValues = tagValues.map(JSON.parse);
  return tagObjValues;
};
let allTagsArray = getTags();

const displayTags = () =>{
  for(let i=0; i<allTagsArray.length;i++){
  let tagLi = document.createElement("li");
  tagLi.className ="tag-li";
  tagLi.appendChild(document.createTextNode(allTagsArray[i].tagName));
  tagaros.appendChild(tagLi);

  let tagEdDl = document.createElement("div");
  tagEdDl.className = "tag-ed-dl-con";
  tagLi.appendChild(tagEdDl);

  let tagDl = document.createElement("button");
  tagDl.className = "tag-delete";
  let tagDlImg = document.createElement("img");
  tagDlImg.className = "tag-delete-img";
  tagDlImg.id = allTagsArray[i].tagId;
  tagDlImg.src = "resource/trash-2.svg";
  tagDl.appendChild(tagDlImg);
  tagEdDl.appendChild(tagDl);

  let tagEd = document.createElement("button");
  tagEd.className = "tag-edit";
  let tagEdImg = document.createElement("img");
  tagEdImg.className = "tag-edit-img";
  tagEdImg.src = "resource/edit.svg";
  tagEd.appendChild(tagEdImg);
  tagEdDl.appendChild(tagEd);
  }
};
displayTags();

document.querySelector(".tag-items").addEventListener("click", e => {
  if (!e.target.matches(".tag-delete-img")) return;
  let tagValue = (e.target.id);
  if(confirm("delete?")){
  localStorage.removeItem(tagValue);
  window.location.reload();
  }
}
, {
  passive: true
});


// let tagListss = [];

// if (localStorage.getItem("tag") !== null) {
//   tagListss = JSON.parse(localStorage.getItem('tag'));
// };
// var tagsArray = [];

// var realTags = tagListss.concat(tagsArray);

// const addNewTag = () => {
//   let newTagInp = document.getElementById("new-tag").value;
//   if(newTagInp.length !==0){
//   realTags.push(newTagInp);
//   console.log(realTags);
//   let tagsArrayJson = JSON.stringify(realTags);
//   localStorage.setItem("tag",tagsArrayJson);
//   window.location.reload();
//   clear();}
//   else{
//     alert("Empty!");
//   }
// }

// const displayTags = () => {
//   let tagLists = [];
//   if (localStorage.getItem("tag") === null) {
//   void(0);
// }
// else{
//   tagLists = JSON.parse(localStorage.getItem('tag'));
// };
//   for(let i = 0;i<tagLists.length;i++){
//    let tagLi = document.createElement("li");
//   tagLi.appendChild(document.createTextNode(tagLists[i]));
//   tagaros.appendChild(tagLi);
//   }
// }
// displayTags();