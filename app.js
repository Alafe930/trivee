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
