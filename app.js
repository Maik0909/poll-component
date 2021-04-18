const d = document
const options = Array.from(d.getElementsByTagName('label'))


function onClick() {
    this.classList.toggle("selected")
    for (const option of options) {
        if (option === this) continue
        else if (option.classList.contains("selected"))
            option.classList.remove("selected")
    }
}




for (const option of options)
    option.addEventListener("click", onClick)




