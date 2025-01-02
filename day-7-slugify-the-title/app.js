
const inputTitle = document.getElementById("title_input")
const outputSlug = document.getElementById("slug_output")

inputTitle.addEventListener('input', () => {
    outputSlug.textContent = "/" + inputTitle.value.toLowerCase().split(' ').join('-')
})