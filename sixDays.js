const select = document.querySelector("select")

select.addEventListener("change", selectHandler)

function selectHandler() {
    localStorage.setItem("Country", this.value)
}

const id = localStorage.getItem("Country")


for (i = 1; i < select.childElementCount; i++) {
    if (select[i].value == id) {
        select.options.selectedIndex = i
    }
}


