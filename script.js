const loadData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((countries) => showData(countries));
};
loadData();

const showData = (countries) => {
  for (const country of countries) {
    console.log(country);
  }
};
