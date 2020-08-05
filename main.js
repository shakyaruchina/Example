//console.log(window);

//const items = document.querySelectorAll('.item');

//items.forEach((item) => console.log(item));



//single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));



//multiple element

//onsole.log(document.querySelectorAll('.item'));
//onsole.log(document.getElementsByClassName('.item'));

/*const ul = document.querySelector('.items');

//ul.remove();

//ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Ruchina';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const btn = document.querySelector('.btn');
btn.style.background = 'red';

//events

const btn = document.querySelector('.btn');

btn.addEventListener('click',(e) =>{
    e.preventDefault();
   document.querySelector('#my-form').style.background = '#ccc';
   document.querySelector('body').classList.add('bg-dark');
   document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1';
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    console.log(nameInput.value);

    if(nameInput.value ==='' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(),3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`
        ));

        userList.appendChild(li);

        nameInput.value ='';
        emailInput.value='';
    }
}

let price = 99.99;

price = 49.99;

console.log(price);

*/

