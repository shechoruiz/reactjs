const BASE_URL = "http://localhost:3001";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {
      // return []; //Ejemplos datos vacios
      //throw new Error("Not Found"); // Ejemplo error
      return callApi("/badges"); //Ejemplo datos completos
      // if (Math.random() > 0.3) { //If para que salga error el 30% de las veces
      //   return callApi("/badges");
      // } else {
      //   throw new Error("500: Server Error");
      // }
    },
    create(badge) {
      //throw new Error("500: Server error"); //Ejemplo error
      return callApi(`/badges`, {
        method: "POST",
        body: JSON.stringify(badge),
      });
    },
    read(badgeId) {
      return callApi(`/badges/${badgeId}`);
    },
    update(badgeId, updates) {
      return callApi(`/badges/${badgeId}`, {
        method: "PUT",
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: "DELETE",
      });
    },
  },
};

export default api;
