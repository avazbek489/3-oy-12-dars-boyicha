const button = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme') || 'light';
applyTheme(currentTheme);

button.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

const style = document.createElement('style');
style.innerHTML = `
.dark-mode {
background-color: #333;
color: #fff;
}
body {
background-color: #fff;
color: #000;
text-color: #fff;
}

`;
document.head.appendChild(style);



// TYPER ANIMATSIYASI


const textElement = document.getElementById('animatedText');
const text = textElement.textContent;
textElement.textContent = '';

const duration = 1.5;
const interval = 4000;

let charIndex = 0;
let animating = false;

function animateText() {
    if (charIndex < text.length) {
        textElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(animateText, 100);
    } else {
        setTimeout(() => {
            eraseText();
        }, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = text.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        setTimeout(() => {
            animateText();
        }, interval - 2000);
    }
}

animateText();

setInterval(() => {
    textElement.textContent = '';
    charIndex = 0;
    animateText();
}, interval);

alert("Hello welcome to my web-site!",) 



document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 35~00);
});