let icons = document.querySelector('icons');
let navbar = document.querySelector('.navbar ');

icons.onclick = () => {
    icons.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>  {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); 
            });
        };
    }); 
    /*sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY >100);

};