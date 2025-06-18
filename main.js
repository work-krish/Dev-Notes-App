import { renderNotes } from "./app.js";

let note = document.querySelector(".note");
let title = document.querySelector(".title");
let addNoteButton = document.querySelector(".add-btn");
let noteDisplay = document.querySelector(".notes-display");
let showOtherNotes = document.querySelector(".notes-container");
let showPinnedNotes = document.querySelector(".pinned-notes-container");
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];    // every thing we get something from local storage its a sting
                                                                                //  so use --> JSON.parse 
noteDisplay.addEventListener("click",(event) => {
    let type = event.target.dataset.type;
    let noteId = event.target.dataset.id;

    switch (type){
        case "del":
            arrayOfNotes = arrayOfNotes.filter(({id}) => id.toString() !== noteId);
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes);
            localStorage.setItem("notes",JSON.stringify(arrayOfNotes))
    }
    

})

addNoteButton.addEventListener("click",() =>{

   if(note.value.trim().length>0 || title.value.trim().length>0){
    arrayOfNotes = [...arrayOfNotes, {id: Date.now(), title: title.value.trim(), note: note.value.trim(), isPinned:false , isArchived: false} ] 
    note.value = title.value = ""
    showOtherNotes.innerHTML = renderNotes(arrayOfNotes);
    localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
   }
   
})

showOtherNotes.innerHTML = renderNotes(arrayOfNotes);