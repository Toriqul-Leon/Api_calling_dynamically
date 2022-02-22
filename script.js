const loadData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((countries) => showData(countries));
};
loadData();

const showData = (countries) => {
  const countryContainer = document.getElementById("countries");
  for (const country of countries) {
    console.log(country.name);
    const div = document.createElement("div");
    countryContainer.appendChild(div);
    div.innerHTML = ` <h2>${country.name.common}</h2>
    <p>${country.capital}</p>

    `;
    div.classList.add("country");
  }
};
