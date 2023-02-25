const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("allCountries");

  countries.forEach((country) => {
    console.log(country.cca2);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.className = "btn";
    countryDiv.className = "country";
    countryDiv.innerHTML = `
    <h3>Name: ${country.name.common}<h/3>
    <p>Capital: ${country.capital ? country.capital : "No Capital"}</p>
    <p>Area: ${country.area} km<sup>2</sup><p>
    <button class="btn" onclick="loadCountryDetail('${country.cca2}')">
    Details
    </button>
    `;
    // >> careful with the quotation mark above (""), ('')
    countriesContainer.appendChild(countryDiv);
  });

  // for(const country of countries) {
  //     console.log(country);
  // }
  // console.log(countries);
  // const countries = document.getElementById("countries");
  // countries.innerHTML = "";
};

const loadCountryDetail = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`
  console.log(url);
  fetch(url)
  .then((response) => response.json())
  // >> be careful here
  .then((data) => showCountryDetail(data[0]))
};

const showCountryDetail= country =>{
  console.log(country);
  const detailContainer = document.getElementById('country-detail')
  detailContainer.innerHTML = `
  <h3>Name: ${country.name.official}<h/3>
  <br>
  <img src="${country.flags.png}">
  `;
  // countriesContainer.appendChild(detailContainer);
}

/* <p>Capital: ${country.capital? country.capital : "No Capital"}</p>
<p>Area: ${country.area} km<sup>2</sup><p> */
loadCountries();
// loadCountryDetail();
// showCountryDetail()