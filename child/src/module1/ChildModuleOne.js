import './ChildModuleOne.style.scss';

export default class ChildModuleOne {
    constructor() {
        const el = document.createElement('div');
        const body = document.getElementById('mainContainer');
        el.classList.add('child-module-one');
        el.innerText = 'This is child module one';
        body.appendChild(el);
    }
}
