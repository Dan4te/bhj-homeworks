const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach(tooltip => {
    const elem = document.createElement('div');
    elem.textContent = tooltip.title;
    elem.classList.add('tooltip');

    tooltip.insertAdjacentElement('afterbegin', elem);

    elem.style.position ='absolute';
    elem.style.display = 'none';

    tooltip.addEventListener('click', (e) => {
        e.preventDefault();

        const activeTooltip = document.querySelector('.tooltip_active');
        if (activeTooltip && activeTooltip !== elem) {
            activeTooltip.classList.remove('tooltip_active');
            activeTooltip.style.display = 'none';
        }
        if (elem.classList.contains('tooltip_active')) {
            elem.classList.remove('tooltip_active');
            elem.style.display = 'none';
        } else {
            elem.classList.add('tooltip_active');
            elem.style.display ='block';

            const rec = tooltip.getBoundingClientRect();
            elem.style.left = `${rec.left + window.pageXOffset}px`;
            elem.style.top = `${rec.bottom + window.pageXOffset}px`;
        }
    });
});