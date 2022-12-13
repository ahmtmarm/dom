//https://www.w3schools.com/jsref/dom_obj_event.asp

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick() {
    console.log("tiklandi")
    console.log(this.innerHTML = "Bilgi degisti")
    // this.style.color="blue"
    this.style.color == "red" ? this.style.color = "blue" : this.style.color = "red"
}
