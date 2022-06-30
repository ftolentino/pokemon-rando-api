import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PokemonAPI from "./js/PokemonAPI.js";

$(document).ready(function () {
  $("#pokeBTN").click(function () {
    // UI code here
    let pokemon = $("#pokeBTN").val();
    let promise = PokemonAPI.getPokemon(pokemon);
    promise.then(
      function (response) {
        let testString = "";
        const body = JSON.parse(response);
        let index = getRandomInt(249);
        console.log(body.data[index].images.large);
        testString = body.data[index].images.large;
        // console.log(testString);
        $("#output").html(`<img src="${testString}" />`);
      },
      function (error) {
        $(".showError").text(
          `There was an error processing your request; ${error}`
        );
      }
    );
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// function robustShowImage(response) {
//   let outputString = "";
//   response.data.forEach(
//     (element) =>
//       (outputString += `<img class="m-3 img-fluid rounded mx-auto d-block col-sm-6" src="${element.images.large}" />`)
//   );
//   $(".output").html(outputString);
// }

// function showImage(response) {
//   $(".output").html(
//     `<img class="m-3 rounded mx-auto my-auto d-block" src="${response.data.images.original.url}" />`
//   );
// }