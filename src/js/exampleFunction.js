
// const exampleFunction = () => {
//   return `hi, i'm a test!'`;
// };

// export default exampleFunction;

export default class PokemonAPI {  
  static getPokemon(city) {
    return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(request.response);
      }
    }
    request.open("GET", url, true);
    request.send();
   });
  }
}