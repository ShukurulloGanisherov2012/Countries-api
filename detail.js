const countries = document.querySelector('main');
let countryName = new URLSearchParams(window.location.search);
countryName = countryName.get('name');
const wrapper = document.querySelector('main')
fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res => res.json())
    .then(data => { 
        data.forEach((country) => {
            console.log(country)
            const countryLink = document.createElement('a');
            countryLink.innerHTML = `
                <div class="card" style="display: flex;flex-wrap:wrap;">
                    <img style="width: 600px" src="${country.flags.png}" alt="">
                    <div class="card-text">
                        <h1 style="font-size: 45px;">${country.name.common}</h1>
                        <p style="font-size: 25px;"><b>Population: </b> ${country.population.toLocaleString('en-IN')}</p>
                        <p style="font-size: 25px;"><b>Region: </b> ${country.region}</p>
                        <p style="font-size: 25px;"><b>Sub Region: </b> ${country.subregion}</p>
                        <p style="font-size: 25px;"><b>Capital: </b> ${country.capital}</p> 
                        <h3>Border countries: ${country.borders}</h3> 
                    </div>
                </div>`;
            wrapper.appendChild(countryLink);
            if(country.borders == undefined){
                countryLink.innerHTML = `
                <div class="card" style="display: flex;flex-wrap:wrap;">
                    <img style="width: 600px" src="${country.flags.png}" alt="">
                    <div class="card-text">
                        <h1 style="font-size: 45px;">${country.name.common}</h1>
                        <p style="font-size: 25px;"><b>Population: </b> ${country.population.toLocaleString('en-IN')}</p>
                        <p style="font-size: 25px;"><b>Region: </b> ${country.region}</p>
                        <p style="font-size: 25px;"><b>Sub Region: </b> ${country.subregion}</p>
                        <p style="font-size: 25px;"><b>Capital: </b> ${country.capital}</p> 
                        <h3>this country has no borders</h3> 
                    </div>
                </div>`;
            }
    });
    });

