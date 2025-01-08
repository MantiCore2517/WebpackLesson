import '../index.css';
import jsLogo from '../assets/javascript.jpg'

console.log('Hello World!');

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';

const img = document.createElement('img');
img.src = jsLogo;

document.querySelector('body').append(h1, img);