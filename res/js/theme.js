function themeButton(){
    let icon = darkTheme?"sun":"moon";
    let msg = darkTheme?"Light Theme":"Dark Theme";
    document.querySelector("nav ul li a#theme").innerHTML = `
        <i class="far fa-${icon} fa-2x"></i>
        <span class="content-paragraph">${msg}</span>
    `;
}
function switchTheme(){
    darkTheme = !darkTheme;
    document.body.classList.toggle("darkTheme");
    themeButton();
}
document.querySelector("body").onload = ()=>{
    window.darkTheme = JSON.parse(localStorage.getItem("giggiog.github.io_darktheme"));
    if(darkTheme == null){
        localStorage.setItem("giggiog.github.io_darktheme", false);
        darkTheme = false;
    }
    if(darkTheme){
        document.body.classList.add("darkTheme");
    }
    themeButton();
    document.querySelector("nav ul li a#theme").addEventListener("click", switchTheme);
}