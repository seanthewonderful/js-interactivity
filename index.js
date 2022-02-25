console.log('Hello World')

const message = document.querySelector("#message")
const form = document.querySelector("form")


function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    movie.appendChild(deleteBtn)
    let ul = document.querySelector("ul")
    ul.appendChild(movie)
    inputField.value = ""
    deleteBtn.addEventListener("click", deleteMovie)
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted"
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent = "You watched that movie!"
    }else {
        message.textContent = "Movie unwatched"
    }
    revealMessage()
}

function hideMessage() {
    message.className = "hide"
}

function revealMessage() {
    message.className = ""
    setTimeout(hideMessage, 1000)
}

// Event listeners
form.addEventListener("submit", addMovie)


