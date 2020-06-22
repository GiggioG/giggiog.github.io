let data = document.querySelector("script[src=\"./js/includes.js\"]")
    .attributes["data-includes"].value
    .split("|");
let includes = [];
data.forEach(element => {
    includes.push(element.split(","));
});
includes.forEach(async i=>{
    let raw = await fetch(i[1]);
    let text = await raw.text();
    let remove = document.querySelectorAll(`i.incl-${i[0]}`)
    remove.forEach(r=>r.outerHTML = text);
}) 