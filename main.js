
const countryContainer = document.querySelector("#countries");
const searchInput = document.querySelector("input.Search");

let countries = [];

fetch('https://restcountries.com/v2/all')
.then(response => response.json ())
.then(data => {
  countries = data;
 
  displayCountries(data);

})

const displayCountries = (data) => {
  let html = "";
  for(let i = 0; i < data.length; i++) {
    html = html + `
    <div class="country-item">
    <img src="${data[i].flag}" class="photo" />
    <div class="germany">
      <h3>${data[i].name}</h3>
      <p class="paragaph"><b> Population</b>:${data[i].population}</p>
      <p class="paragaph"><b>Region</b>:${data[i].region} </p>
      <p class="paragaph"><b>Capital</b>:${data[i].capital}</p>
    </div>
  </div>
  
    `
  }
  countryContainer.innerHTML = html;

}



const searchCountry = () => {
  const filteredCountries = countries.filter(country => country.name.includes(searchInput.value));
  displayCountries(filteredCountries);
}

searchInput.addEventListener('keyup', searchCountry);
    
      function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");

      };

      const darkModeToggle = document.querySelector('.darkModeToggle');

      darkModeToggle.addEventListener('click', myFunction)
