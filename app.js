const key = "2fe828b6d9e54effb77135551241607";

const searchInput = document.querySelector(".search-input input");

const locationName = searchInput.value;

// // let inputValue = searchInput.value.trim();

// if(searchInput.value){
//     const locationName = searchInput.value[0].toUpperCase() + searchInput.value.substring(1);   //converting first letter to capital

//     console.log(locationName);
// }

const URL = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${locationName}`;

const btn = document.querySelector(".btn");

const icon = document.querySelector(".icon");

const temp = document.querySelector(".temp h1");

const loc = document.querySelector(".loc h5");

const humidityData = document.querySelector(".hum-value");

const windData = document.querySelector(".wind-value");

const getData = async () => {
  const locationName = searchInput.value;
  if (!locationName) {
    console.error("Empty");
    return;
  }

  const URL = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${locationName}`;

  try {
    // console.log('fetching data..');
    let response = await fetch(URL);

    console.log(response);

    let data = await response.json();

    console.log(data);

    const cloud = data.current.cloud;
    console.log(cloud);

    if (cloud < 10) {
      icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    if (cloud > 10 && cloud < 50) {
      icon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
    }

    if (cloud > 50) {
      icon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
    }

    temp.innerText = `${data.current.temp_c}C`;

    loc.innerText = data.location.name;

    humidityData.innerText = data.current.humidity;

    windData.innerText = `${data.current.wind_kph} kph`;
  } catch (error) {
    console.error("Error:", error);
  }

  // console.log(data.current.temp_c);

  // console.log(data.current.humidity);

  // console.log(data.current.wind_kph);

  // console.log(data.location.name)
};

btn.addEventListener("click", (event) => {
  console.log(searchInput.value);
  event.preventDefault();
  getData();
});
