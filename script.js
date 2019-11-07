document.title = "Nowy Tytuł!";

let container = document.querySelector('#container');
console.log(container);

container.innerHTML = '<button>Nowy Przycisk</button>';
container.innerHTML += '<button>Nowy Przycisk</button>';


let buttons = document.querySelectorAll('button');
console.log(buttons);
for (let button of buttons) {
    buttons.innerText =["OK", "exit"];
    console.log(buttons);
}


