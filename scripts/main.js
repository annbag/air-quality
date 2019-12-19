document.addEventListener('DOMContentLoaded', () => {
  let lat = 52.2405192;
  let lng = 21.0811282;
  let station;
  let values;
  const apiKey = 'qKEUGRSSVLE6AB710I7UR09ZgL2Xh2Md';

  const inputLatitude = document.getElementById('latitude');
  const inputLongitude = document.getElementById('longitude');
  const formPlace = document.getElementById('place-form');

  formPlace.addEventListener('submit', event => {
    event.preventDefault();

    lat = inputLatitude.value;
    lng = inputLongitude.value;

    return getStationLocation().then(data => {
      if (data[0]) {
        console.log(data[0]);
        station = data[0];
        getMeasurements().then(airData => {
          console.log(airData);
          values = airData;
        });
      } else {
        console.log('nie znaleziono stacji');
      }
    });
  });

  const displayDataBtn = document.getElementById('display-data');
  displayDataBtn.addEventListener('click', displayData);

  function displayData() {
    const stationDiv = document.getElementById('station');
    const measurementsDiv = document.getElementById('measurements');

    stationDiv.innerHTML = '';
    measurementsDiv.innerHTML = '';
    stationDiv.classList.add('station');
    measurementsDiv.classList.add('measurements');

    const { address } = station;
    const { current } = values;

    const cityElem = document.createElement('p');
    cityElem.classList.add('title');
    cityElem.innerText = address.city;
    stationDiv.appendChild(cityElem);

    const addressElem = document.createElement('p');
    addressElem.classList.add('address');
    addressElem.innerText = `Adres czujnika: ul. ${address.street} ${address.number}, ${address.city}, ${address.country}`;
    stationDiv.appendChild(addressElem);

    for (let i = 0; i < current.values.length; i++) {
      const valueRowElem = document.createElement('div');
      valueRowElem.classList.add('value-row');

      const nameElem = document.createElement('p');
      nameElem.classList.add('name');
      nameElem.innerText = `${current.values[i].name}`;

      const valueElem = document.createElement('p');
      valueElem.classList.add('value');
      valueElem.innerText = `${current.values[i].value}`;

      valueRowElem.appendChild(nameElem);
      valueRowElem.appendChild(valueElem);

      measurementsDiv.appendChild(valueRowElem);

      const standard = current.standards.find(
        x => x.pollutant === current.values[i].name
      );
      if (standard) {
        if (standard.percent >= 100) {
          valueElem.classList.add('high-level');
        } else if (standard.percent >= 50) {
          valueElem.classList.add('warning');
        } else {
          valueElem.classList.add('low-level');
        }
      }
    }
  }

  function getStationLocation() {
    return fetch(
      `https://airapi.airly.eu/v2/installations/nearest?lat=${lat}&lng=${lng}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          apikey: apiKey
        }
      }
    ).then(data => data.json());
  }

  function getMeasurements() {
    return fetch(
      `https://airapi.airly.eu/v2/measurements/installation?installationId=${station.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          apikey: apiKey
        }
      }
    ).then(airData => airData.json());
  }
});
