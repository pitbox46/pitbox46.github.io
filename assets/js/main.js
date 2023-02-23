function loadHeaders() {
    var header = document.getElementById("headerID")
    if(isNonLocal())
        header.appendChild(createButton("Home", "/"))
    else 
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
    if(isNonLocal()) {
        var elements = document.getElementsByTagName("a");
        for(let i = 0; i < elements.length; i++) {
            var element = elements[i];
            if(element.getAttribute("href").endsWith(".html")) {
                element.setAttribute("href", element.getAttribute("href").replace(".html", ""));
            }
        }
    }
}

function isNonLocal() {
    return window.location.href.startsWith("https://pitbox46.github.io")
}

const loadListeners = [loadHeaders, removeHTMLExtension];

function addLoadListener(func) {
    loadListeners.push(func)
} 

window.onload = function() {
    loadListeners.forEach(func => {
        func();
    });
    var title = document.getElementsByTagName("title")[0];
    title.innerHTML = title.innerHTML + " - pitbox46.github.io"
}

function populatePoemInfo(title, date) {
    document.getElementById("title").innerHTML = title;
    document.getElementById("date").innerHTML = date;
    document.getElementById("pageTitle").innerHTML = title + " - " + date;
}

function populatePoem(content) {
    const contentDiv = document.getElementById("content");
    var lines = content.replaceAll("\n\n", "\n<br>\n").split("\n");
    for (var i = 0; i < lines.length; i++) {
        var p = document.createElement("p");
        p.innerHTML = lines[i];
        contentDiv.appendChild(p);
    }
}