export const $ = (selector) => document.querySelector(selector);

export const $$ = (selector) => document.querySelector(selector);

export function fadeIn(element) {

    if (!element) return;
    element.style.display = 'block';
    setTimeout(() => {

        element.style.opacity = '1'
    }, 2000
    );
}
export function fadeOut(element) {

    if (!element) return;
    element.style.display = 'none';
    setTimeout(() => {

        element.style.opacity = '1'
    }, 3000
    );



}