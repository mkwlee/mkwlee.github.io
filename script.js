var sections = [document.getElementById('secProject'), document.getElementById('secExperience'), document.getElementById('secAbout')];

function changeContent(element, page) {
    if(sections[page].style.width != '66%') {
        for (var i = 0; i < 3; i++) {
            if(i == page) {
                // sections[i].style.width = '66%';
                // sections[i].style.backgroundColor = '#2190bf';
                TweenMax.to(sections[i], 1, {
                    width: '66%',
                    // fontSize: '42px',
                    backgroundColor: '#2190bf',
                    ease: Power2.easeInOut
                });
            }
            else {
                // sections[i].style.width = '16.5%';
                TweenMax.to(sections[i], 1, {
                    width: '16.5%',
                    fontSize: '21px',
                    ease: Power2.easeInOut
                });
                sections[i].style.backgroundColor = '#27AAE1';
            }
        }

        TweenMax.to(element, 0.5, {
            opacity: '0',
            ease: Power2.easeInOut,
            onComplete: function () {
                switch(page) {
                    case 0:
                        element.data = 'projects.html';
                        break
                    case 1:
                        element.data = 'experience.html';
                        break
                    case 2:
                        element.data = 'about.html';
                        break
                }

                TweenMax.to(element, 0.5, {
                    opacity: '1',
                    ease: Power2.easeInOut
                });
            }
        });
    }
}

function hoverSecButton(element) {
    element.style.backgroundColor = '#2190bf';
    element.style.transition = 'background-color 0.5s ease';
}

function hoverResetSecButton(element) {
    if (element.style.width != '66%') {
        element.style.backgroundColor = '#27AAE1';
    }
}