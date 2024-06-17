import {
    $, $$, fadeIn, fadeOut
} 
from `./utils.js`;

export function initModal() {

    const modal = $('#myModal');
    const btn = $('openModal');
    const span = $('.close');


    if (btn) btn.addEventListener('click', openModal);
    if (span) span.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {

        if (event.target == modal) {
            closeModal()
        }

    });
    function openModal() {
        if (modal) fadeIn(modal);
    }
    function closeModal() {
        if (modal) fadeOut(modal);
    }
}