const rotatorCase = document.querySelector('.rotator');
let i = 0;

const addText = function () {
    if (i >= 0) {
        rotatorCase.children[i].classList.remove('rotator__case_active');
    }
    if (i == rotatorCase.children.length - 1) {
        i = 0;
        rotatorCase.children[i].classList.add('rotator__case_active');
    } else {
        i += 1;
        rotatorCase.children[i].classList.add('rotator__case_active');
        let index = i - 1;
        rotatorCase.children[index].classList.remove('rotator__case_active');
    }
}
const inervalID = setInterval(addText, 1000);