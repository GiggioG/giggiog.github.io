function makeModal() {
    let bkgDiv = document.createElement("div");
    bkgDiv.className = "modalBkg";

    let modalDiv = document.createElement("div");
    modalDiv.className = "modal";

    bkgDiv.appendChild(modalDiv);
    document.body.appendChild(bkgDiv);

    return { modalDiv, bkgDiv };
}

function removeModal() {
    if (!document.querySelector("div.modalBkg")) { return; }
    document.querySelector("div.modalBkg").remove();
}