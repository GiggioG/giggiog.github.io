let scripts = document.querySelector("script[src=\"./res/js/includesJS.js\"]")
    .attributes["data-includes"].value
    .split("|");
scripts.forEach(s => {
    let scr = document.createElement("script");
    scr.src = s;
    document.head.appendChild(scr);
});