const input = document.querySelector("input");
const btn = document.querySelector('button');
const ul = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}
function additem() {
    if (inputLength() > 0) {
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li)
        input.value = "";
    } 
}
function includeItem(event) {
    if (inputLength() > 0) {
        if (event.key == "Enter") {
            additem()
        }
    }
}

btn.addEventListener('click', additem);
input.addEventListener('keypress', includeItem);
