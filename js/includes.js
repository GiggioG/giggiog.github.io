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
    document.querySelector(`i#${i[0]}`).outerHTML = text;
})