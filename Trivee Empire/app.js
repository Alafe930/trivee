//nav
const header = document.querySelector('.header');
const btn = document.querySelector('.btn-mobile-nav');

btn.addEventListener('click', function () {
    header.classList.toggle('nav-open');
});

// about js

const Btn = document.querySelectorAll('.btn');
const contentBox = document.querySelector('.about');
const container = document.querySelectorAll('.about-vision-container');

contentBox.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    
    if (id) {
        // remove active from other button
        Btn.forEach(function (btn) {
            btn.classList.remove('active')
            e.target.classList.add('active')
        });

        //hide other article
        container.forEach(function (article) {
            article.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active')
    }



});


// contact

const contact = document.querySelector('.modal-overlay');
const openBtn = document.querySelector('.nav-cta-contact');
const closeBtn = document.querySelector('.close-btn')


openBtn.addEventListener('click', function () {
    contact.classList.add('open-modal')
});

closeBtn.addEventListener('click', function () {
    contact.classList.remove('open-modal')
})