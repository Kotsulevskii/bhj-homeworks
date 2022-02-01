setInterval(function () {
    let setElemets = Array.from(document.querySelectorAll('.rotator__case')); 
    let firstElement = setElemets.findIndex((item) => item.className === 'rotator__case rotator__case_active');
    if (firstElement === -1 || firstElement === (setElemets.length - 1)) {
        document.querySelectorAll('.rotator__case')[0].classList.add('rotator__case_active');
         document.querySelectorAll('.rotator__case')[firstElement].classList.remove('rotator__case_active');
    } else {
        setElemets[firstElement].classList.remove('rotator__case_active');
        setElemets[firstElement].nextElementSibling.classList.add('rotator__case_active');
    };
}, 1000);