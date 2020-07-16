const link_tab1 = document.getElementById('link-tab1');
const link_tab2 = document.getElementById('link-tab2');
const link_tab3 = document.getElementById('link-tab3');
const link_tab4 = document.getElementById('link-tab4');
const link_tab5 = document.getElementById('link-tab5');

const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');
const tab5 = document.getElementById('tab5');

link_tab1.addEventListener('click', terminator);
link_tab2.addEventListener('click', terminator);
link_tab3.addEventListener('click', terminator);
link_tab4.addEventListener('click', terminator);
link_tab5.addEventListener('click', terminator);


function terminator(){
    link_tab1.classList.remove('active');
    link_tab2.classList.remove('active');
    link_tab3.classList.remove('active');
    link_tab4.classList.remove('active');
    link_tab5.classList.remove('active');
}

link_tab1.addEventListener('click', podium);
link_tab2.addEventListener('click', podium);
link_tab3.addEventListener('click', podium);
link_tab4.addEventListener('click', podium);
link_tab5.addEventListener('click', podium);

function podium(){
    tab1.className = 'hidden';
    tab2.className = 'hidden';
    tab3.className = 'hidden';
    tab4.className = 'hidden';
    tab5.className = 'hidden';

    let abrakadabra = this.getAttribute('data-value');
    let showblok = document.getElementById(abrakadabra);
    showblok.className = 'animated fadeInUp';
}