// document.title = "Nowy Tytuł!";

// let container = document.querySelector('#container');
// console.log(container);

// container.innerHTML = '<button>Nowy Przycisk</button>';
// container.innerHTML += '<button>Nowy Przycisk</button>';


// let buttons = document.querySelectorAll('button');
// console.log(buttons);
// // for (let button of buttons) {
// //     buttons.innerText = ["OK", "exit"];
// //     console.log(buttons);
// // }


// buttons[0].innerText = 'OK';
// buttons[1].innerText = 'Exit';


let buttonSave = document.getElementById('zapisz');
console.log(buttonSave);
buttonSave.innerText = 'Left';
buttonSave.style.backgroundColor='#fff';

let buttonSave1 = document.getElementById('anuluj');
console.log(buttonSave1);
buttonSave1.innerText = 'Right';
buttonSave1.style.color='green';