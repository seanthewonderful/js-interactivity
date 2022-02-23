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
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent = "You watched that movie, pimp!"
    }else {
        message.textContent = "Change your mind much?"
    }
}
// Event listeners
form.addEventListener("submit", addMovie)