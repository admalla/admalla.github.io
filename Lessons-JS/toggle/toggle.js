const unique_link = document.getElementById('unique-link');
const theme_link = document.getElementById('theme-link');
const translation_link = document.getElementById('translation-link');
const event_link = document.getElementById('event-link');
const photo_link = document.getElementById('photo-link');

const unique = document.getElementById('unique');
const theme = document.getElementById('theme');
const translation = document.getElementById('translation');
const event_ = document.getElementById('event');
const photo = document.getElementById('photo');

unique_link.addEventListener('click', activator );
theme_link.addEventListener('click', activator);
translation_link.addEventListener('click', activator);
event_link.addEventListener('click', activator);
photo_link.addEventListener('click', activator);



function activator(){
    unique_link.classList.remove('active');
    theme_link.classList.remove('active');
    translation_link.classList.remove('active');
    event_link.classList.remove('active');
    photo_link.classList.remove('active');
    this.classList.add('active');
}

unique_link.addEventListener('click', show);
theme_link.addEventListener('click', show);
translation_link.addEventListener('click', show);
event_link.addEventListener('click', show);
photo_link.addEventListener('click', show);

function show(){
    unique.className = 'hidden';
    theme.className = 'hidden';
    translation.className = 'hidden';
    event_.className = 'hidden';
    photo.className = 'hidden';
    
    let currentId = this.getAttribute('data-value');
    let visibleBlock = document.getElementById(currentId);
    visibleBlock.className = 'animated fadeInDown';
}

