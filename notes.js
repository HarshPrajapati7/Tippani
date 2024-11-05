const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || ""; // Load saved notes
    notes = document.querySelectorAll(".input-box"); // Re-select notes after loading
    
    notes.forEach(note => {
        let img = document.createElement("img");
        img.src = "delete.png";
        img.addEventListener("click", function () { // Attach click listener for deletion
            note.remove();
            updatestorage();
        });
        note.appendChild(img); // Append delete button to each note
    });
}

function updatestorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    
    img.addEventListener("click", function () { // Add listener to new delete button
        inputBox.remove();
        updatestorage();
    });
    
    inputBox.appendChild(img); // Append delete button
    notesContainer.appendChild(inputBox); // Add new note

    updatestorage(); // Update storage with new note
});

showNotes(); // Initialize notes on page load


