const loadData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((countries) => showData(countries));
};
loadData();

const showData = (countries) => {
  const countryContainer = document.getElementById("countries");
  for (const country of countries) {
    const div = document.createElement("div");
    countryContainer.appendChild(div);
    div.innerHTML = ` <h2>${country.name.common}</h2>
    <p>${country.capital}</p>
    <button onclick='loadSingleData("${country.name.common}")'>Show More</button>

    `;
    div.classList.add("country");
  }
};

const loadSingleData = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountry(data[0]));
};

const displayCountry = (country) => {
  const countryInfo = document.getElementById("country-info");
  countryInfo.innerHTML = `<h2>${country.name.common}</h2>
  <img src="${country.flags.png}" >
  `;
};
