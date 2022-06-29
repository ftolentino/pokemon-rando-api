export default class PokemonAPI {
  static getPokemon() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://pokeapi.co/api/v2/pokemon/`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}