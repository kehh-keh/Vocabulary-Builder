const wordInput = document.getElementById("wordInput");
const wordList = document.getElementById("wordList");

// KUHAON ANG WORDS SA LOCAL STORAGE
let words = JSON.parse(localStorage.getItem("words")) || [];

// DISPLAY USERNAME + WORDS
window.onload = function () {

    const username = localStorage.getItem("username");

    if(username){
        document.getElementById("usernameDisplay").innerText =
            "Welcome, " + username;
    }

    displayWords();
};

// DISPLAY WORDS
function displayWords() {

    wordList.innerHTML = "";

    words.forEach((word, index) => {

        const card = document.createElement("div");

        card.classList.add("word-card");

        card.innerHTML = `
            <h3>${word}</h3>

            <div class="card-buttons">

                <button
                    class="edit-btn"
                    onclick="editWord(${index})"
                >
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteWord(${index})"
                >
                    Delete
                </button>

            </div>
        `;

        wordList.appendChild(card);
    });
}

// ADD WORD
function addWord() {

    const newWord = wordInput.value.trim();

    if (newWord === "") {
        alert("Please enter a word.");
        return;
    }

    // ADD WORD
    words.push(newWord);

    // SAVE SA LOCAL STORAGE
    localStorage.setItem("words", JSON.stringify(words));

    // CLEAR INPUT
    wordInput.value = "";

    // REFRESH DISPLAY
    displayWords();
}

// DELETE WORD
function deleteWord(index) {

    const confirmDelete = confirm("Delete this word?");

    if (confirmDelete) {

        words.splice(index, 1);

        // UPDATE STORAGE
        localStorage.setItem("words", JSON.stringify(words));

        displayWords();
    }
}

// EDIT WORD
function editWord(index) {

    const updatedWord = prompt("Edit word:", words[index]);

    if (updatedWord !== null && updatedWord.trim() !== "") {

        words[index] = updatedWord.trim();

        // UPDATE STORAGE
        localStorage.setItem("words", JSON.stringify(words));

        displayWords();
    }
}
// SIGNUP FUNCTION
function signup(){

    const email =
        document.getElementById("email").value;

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if(email === "" || username === "" || password === ""){

        alert("Please fill in all fields.");
        return;
    }

    // SAVE ACCOUNT
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // EMPTY WORDS
    localStorage.setItem("words", JSON.stringify([]));

    alert("Signup successful!");

    window.location.href = "index.html";
}

function logout(){

    alert("Logged out successfully!");

    window.location.href = "login.html";
}

// LOGIN FUNCTION
function login(){

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    // KUHAON ANG SAVED ACCOUNT
    const savedEmail =
        localStorage.getItem("email");

    const savedPassword =
        localStorage.getItem("password");

    // CHECK ACCOUNT
    if(
        email === savedEmail &&
        password === savedPassword
    ){

        alert("Login successful!");

        window.location.href = "index.html";

    }else{

        alert("Invalid email or password!");
    }
}