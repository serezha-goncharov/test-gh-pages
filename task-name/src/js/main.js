import '/sass/style.scss';
// import './gifts/renderGiftItems.js';


const elements = [
  { selector: 'a.logo', path: '' },
  { selector: '.gifts-link, .gifts-button', path: 'gifts/' },
  { selector: '.navigation__item:nth-child(2) a', path: '#about' },
  { selector: '.navigation__item:nth-child(3) a', path: '#best' },
];

const addBaseUrlToLinkPath = (elements, path) => elements.forEach(element => element.href = `${import.meta.env.BASE_URL}${path}`);

elements.forEach(element => addBaseUrlToLinkPath(document.querySelectorAll(element.selector), element.path));
