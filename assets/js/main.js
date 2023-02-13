function loadHeaders() {
    var header = document.getElementById("headerID")
    header.appendChild(createButton("Home", "index.html"))
    header.appendChild(createButton("Poems", "pages/poems.html"))
    header.appendChild(createButton("Music", "pages/music.html"))
    header.appendChild(createButton("About", "pages/about.html"))
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

function removeHTMLExtension() {
    if(window.location.href.startsWith("https://pitbox46.github.io")) {
        var elements = document.getElementsByTagName("a");
        for(let i = 0; i < elements.length; i++) {
            var element = elements[i];
            if(element.getAttribute("href").endsWith(".html")) {
                element.setAttribute("href", element.getAttribute("href").replace(".html", ""));
            }
        }
    }
}

window.onload = function() {
    loadHeaders();
    removeHTMLExtension();
}