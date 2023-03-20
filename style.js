const countries = async () => {
  const fetchCountry = await fetch("https://restcountries.com/v3.1/all");
  const item = await fetchCountry.json();
  console.log(item);
  const select = document.querySelector("#select");

  let country = [];
  item.forEach((Cname) => {
    country.push(Cname.name.common);
  });
  country.sort();

  country.forEach((name) => {
    //   console.log(name);
    const valueName = name.replaceAll(" ", "-");
    const option = document.createElement("option");
    option.setAttribute("value", valueName.toLowerCase());
    option.innerText = name;
    select.append(option);
  });
};

countries();
