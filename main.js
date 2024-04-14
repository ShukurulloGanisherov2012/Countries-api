document.body.style.backgroundColor = 'rgb(248, 248, 248)';

document.querySelector('#light').addEventListener('click', function () {
    document.body.style.backgroundColor = 'rgb(248, 248, 248)';
    document.querySelector('.title').style.color = 'black';
    document.querySelector('#light').style.color = 'yellow';
    document.querySelector('#dark').style.color = 'black';
    document.querySelector('header').style.backgroundColor = 'white';
});

document.querySelector('#dark').addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
    document.querySelector('.title').style.color = 'white';
    document.querySelector('#light').style.color = 'yellow';
    document.querySelector('#dark').style.color = 'darkslateblue';
    document.querySelector('header').style.backgroundColor = 'rgb(0, 9, 87)';
});

const wrapper = document.querySelector('main');

fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then(renderCard);

const filterByRegion = document.querySelector('.filter');
filterByRegion.addEventListener('change', function () {
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
        .then((res) => res.json())
        .then(renderCard);
});

function renderCard(data) {
    wrapper.innerHTML = ''; // Clear existing content
    data.forEach((country) => {
        const countryLink = document.createElement('a');
        countryLink.href = `detail.html?name=${country.name.common}`;
        countryLink.innerHTML = `
            <div class="card">
                <img src="${country.flags.png}" alt="">
                <div class="card-text">
                    <h3>${country.name.common}</h3>
                    <p><b>Population: </b> ${country.population.toLocaleString('en-IN')}</p>
                    <p><b>Region: </b> ${country.region}</p>
                    <p><b>Capital: </b> ${country.capital}</p>  
                </div>
            </div>`;
        wrapper.appendChild(countryLink);
    });
}


const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const countryName = card.querySelector('h3').textContent.toLowerCase();
        if (countryName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});