let open = document.getElementById('menu-toggle');
open.onclick = op;
function op(){
    close.classList.toggle('trans');
}

let close = document.getElementById('menu');
let i = close.firstElementChild.firstElementChild;
i.onclick = f;
function f(){
    close.classList.remove('trans');
}

/* Collapse */

let main = document.getElementById('manty');
let currentBlock;

main.addEventListener('click', activator);

function activator(event){
    let act = event.target.closest('a');
    if(!act) return;

    if (currentBlock) {
        currentBlock.className = 'hidden';
    }
    let go = act.getAttribute('data-toggle');
    
    currentBlock = document.getElementById(go);

    currentBlock.className = 'animated fadeInDown';
}

/* PopUp */

let deac = document.getElementById('deactivator');
let popik = document.getElementById('popup');


let gallery = document.getElementById('gal');
gallery.addEventListener('click', pup);
function pup(event){
    let klik = event.target.closest('a');
    if(!klik) return;
    document.body.classList.toggle('over');

    deac.className = ('activeshow animated fadeIn');
    popik.className = ('activeshow animated fadeIn');

    let u = klik.firstElementChild.src;
    popik.firstElementChild.src = u;
    console.log(popik.firstElementChild);

}
deac.onclick = () =>{
    deac.classList.remove('activeshow');
    popik.classList.remove('activeshow');
    deac.classList.add('hidden');
    popik.classList.add('hidden');
    document.body.classList.remove('over');
}
