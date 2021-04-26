// 내가한거
// const select = document.querySelector("select")

// select.addEventListener("change", selectHandler)

// function selectHandler() {
//     localStorage.setItem("Country", this.value)
// }

// const id = localStorage.getItem("Country")


// for (i = 1; i < select.childElementCount; i++) {
//     if (select[i].value == id) {
//         select.options.selectedIndex = i
//     }
// }

// 노마드코더
const select = document.querySelector(".js-select");

function handleChange() {
    const selected = select.value;
    localStorage.setItem("country", selected);
}

function loadCountries() {
    const selected = localStorage.getItem("country");
    if (selected) {
        const option = document.querySelector(`option[value="${selected}"]`);
        option.selected = true;
        console.dir(option)
    }
}

loadCountries();
select.addEventListener("change", handleChange);


// loadCountries();
// select.addEventListener("change", handleChange);



// 와 잘한다.. ㅠㅠ
// 새로운 사람
// const selectBar = document.querySelector("select");
// const COUNTRY_LS = 'country';

// selectBar.addEventListener("change", saveCountry);


// function saveCountry() {
//     const country = selectBar.value;
//     localStorage.setItem(COUNTRY_LS, country)
// }

// function loadCountry() {
//     const country = localStorage.getItem(COUNTRY_LS);
//     selectBar.value = country;
// }


// loadCountry();