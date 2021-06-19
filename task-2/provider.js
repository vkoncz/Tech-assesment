class Provider {
  /**
   * Gets the weather for a given city
   */ static getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`);
  }
  /**
   * Gets the weather for a given city
   */ static getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`);
  }
  /**
   * Given Longtitude and latitude, this function returns a city
   */ static findCity(long, lat) {
    return Promise.resolve(`London`);
  }
}

// Solutions

// 1.) Find city by coordinates
Provider.findCity(0.1278, 51.5074).then(result => {
  console.log('Found city:', result);
});

// 2.) Weather by coordinates
(async () => {
  const city = await Provider.findCity(0.1278, 51.5074);
  const weather = await Provider.getWeather(city);

  console.log(weather);
})();

// 3.) Weather and currency for London
const city = 'London';
const weather = Provider.getWeather(city);
const currency = Provider.getLocalCurrency(city);

Promise.all([weather, currency]).then(([weather, currency]) => {
  console.log(weather, 'and', currency);
});
