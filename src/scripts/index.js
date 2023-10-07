import 'regenerator-runtime';
import '../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const bars = document.querySelectorAll('.bar');
    const closeIcon = document.querySelector('.close-icon');

    const toggleMenu = () => {
        menu.classList.toggle('active');
        bars.forEach(bar => bar.classList.toggle('active'));
        closeIcon.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleMenu);

    closeIcon.addEventListener('click', () => {
        menu.classList.remove('active');
        bars.forEach(bar => bar.classList.remove('active'));
        closeIcon.classList.remove('active');
    });

    document.addEventListener('click', event => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
            bars.forEach(bar => bar.classList.remove('active'));
            closeIcon.classList.remove('active');
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleMenu();
        }
    });
});

const displayData = (data) => {
    const output = document.getElementById("output");
    let html = "";

    data.restaurants.forEach(restaurant => {
        html += `<div class='resto' tabindex="0">
                    <img src='${restaurant.pictureId}' alt='${restaurant.name}'>
                    <h2>${restaurant.name}</h2>
                    <p>Rating: ${restaurant.rating}</p>
                    <p>Kota: ${restaurant.city}</p>
                 </div>`;
    });

    output.innerHTML = html;
};

document.addEventListener('DOMContentLoaded', () => {
    const xmlhttp = new XMLHttpRequest();
    const url = "./public/data/DATA.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            displayData(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
});

class MyFooter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const footer = document.createElement('footer');
        footer.textContent = 'FOODIE ©2023, Aulia Augusta';
        shadow.appendChild(footer);

        const style = document.createElement('style');
        style.textContent = `
            footer {
                background-color: #FFC670;
                color: #FFEEEE;
                padding: 15px;
                text-align: center;
            }
        `;
        shadow.appendChild(style);
    }
}

customElements.define('my-footer', MyFooter);
