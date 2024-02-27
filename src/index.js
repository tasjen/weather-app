import './styles.css';

let infoJSON;

async function getJSON(location, days) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e9e1442cd9e446ff9c4175455230612&q=${location}&days=${days}`,
  );
  const json = await response.json();
  console.log(json);
  logInfo(json);
}

function logInfo(json) {
  logName(json);
  logCondition(json.current);
}

function logName(json) {
  console.log(`name: ${json.location.name}`);
  console.log(`country: ${json.location.country}`);
}

function logCondition(time) {
  console.log(`time: ${time.last_updated || time.time}`);
  console.log(`temp: ${time.temp_c} °C`);
  console.log(`cloud: ${time.cloud}%`);
  console.log(`feels like: ${time.feelslike_c} °C`);
  console.log(`humidity: ${time.humidity}%`);
  console.log(`pressure: ${time.pressure_mb} mbar`);
}

getJSON('london', 3);

const $form = document.querySelector('submit', (target) => {
  target.preventDefault();
});

async function renderInfo(infoJSON) {
  const $infoContainer = document.querySelector('#info-container');
  const {
    location: { name, country },
    last_updated,
    time,
    condition: { icon, text },
    feelslike_c,
    humidity,
    temp_c,
  } = infoJSON;

  const $div = document.createElement('div');
  $div.classList.add('info');

  const $location = {...$div};
  $location.textContent = `${name}, ${country}`;
  
  const $time = {...$div};
  $time.textContent = last_updated ?? time;
  
  const $icon = document.createElement('img');
  $icon.classList.add('info');
  $icon.src = icon;
  $icon.alt = text;

  const $temp = {...$div};
  $temp.textContent = `${temp_c}°`;
  
  const $text = {...$div};
  $text.textContent = text;
  
  const $feelsLike = {...$div};
  $feelsLike.textContent = `${feelslike_c}°`;
  
  const $humidity = {...$div};
  $humidity.textContent = `${humidity}%`;
  
  $infoContainer.appendChild($location);
  $infoContainer.appendChild($time);
  $infoContainer.appendChild($icon);
  $infoContainer.appendChild($text);
  
  
}

async function renderForecast(info) {}
