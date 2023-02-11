function loadHeaders() {
    var header = document.getElementById("headerID")
    header.appendChild(createButton("Home", "index.html"))
    header.appendChild(createButton("Poems", "posts/poems.html"))
    header.appendChild(document.createElement("hr"))
}

function createButton(buttonText, ref) {
    var anchor = document.createElement("a")
    anchor.setAttribute("href", ref)
    var button = document.createElement("button")
    button.appendChild(document.createTextNode(buttonText))
    anchor.appendChild(button)
    return anchor;
}