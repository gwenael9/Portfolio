//  function du thème

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    });
};

menuMobile();


// portfolio 

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    const resetActiveLink = () => {
        tabs.forEach(elem => {
            elem.classList.remove('active');
        })
    }

    // fonction callback : elle permet de passer des arguments à la fct en dessous pour créer une autre fct
    const showProjets = (elem) => {
        projets.forEach(projet => {

            let filter = projet.getAttribute('data-category');

            // condition pour le allprojets
            if(elem === 'all') {
                projet.parentNode.classList.remove('hide');
                return  //j'arrête mon action ici, le prochain if ne sera pas activé
            }

            filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');
        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            // preventDefault permet que cela ne monte pas en haut du navigateur
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjets(filter)
            resetActiveLink();
            elem.classList.add('active');
        });
    })
}

tabsFilters();

// balise portfolio modal

function showProject() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        })
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=${link.dataset.id}]`).classList.add('show');
        })
    })

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            hideModals();
        })
    })
} 

showProject();


// effets transition quand je change de section en scrollant sur ma page

const sectionAnim = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');


    sections.forEach((section, index) => {
        // index permet de voir le nbr de section qu'on a
        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "1.6s";
    });

    skills.forEach(skill => {
        skill.style.width = "0";
        skill.style.transition = "all 1.6s"
    })

    let sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach( entrie => {
            if(entrie.isIntersecting) {
                let elem = entrie.target;
                elem.style.opacity = 1;
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });



    let skillsObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach( entrie => {
            if(entrie.isIntersecting) {
                let elem = entrie.target;
                elem.style.width = elem.dataset.width + "%";
            }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    
    });
}

sectionAnim();

