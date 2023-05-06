let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450, 
    reset: true
});

sr.reveal('.play-text', {delay:200, origin:'bottom'});
sr.reveal('.play-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {delay:300, origin:'bottom'});
sr.reveal('.play-text-2', {delay:200, origin:'bottom'});
sr.reveal('.play-img-2', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {delay:300, origin:'bottom'});
