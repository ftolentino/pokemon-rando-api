import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PokemonAPI from "./js/PokemonAPI.js";
import RandomColor from "./js/RandomColorAPI.js";

$(document).ready(function () {
  $("#pokeBTN").click(function () {
    // UI code here
    let pokemon = $("#pokeBTN").val();
    let promise = PokemonAPI.getPokemon(pokemon);
    makeApiCall();
    promise.then(function (response) {
      let testString = "";
      const body = JSON.parse(response);
      console.log(response);
      let index = getRandomInt(249);

      testString = body.data[index].images.large;
      let cardPrice = body.data[index].tcgplayer.url;

      $("#output").html(
        `<img class="img-fluid my-4" src="${testString}" /><br><a class="display-6 text-decoration-none" href="${cardPrice}" target="_blank">Buy card</a>`
      );
    }),
    function (error) {
      $(".showError").text(
        `There was an error processing your request; ${error}`
      );
    };
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function makeApiCall() {
  const response = await RandomColor.getRandomColor();
  getElements(response);
}

function getElements(response) {
  let index = getRandomInt(99);
  if (response) {
    const body = response;
    let colorVar = "#" + body.colors[index].hex;
    $("#cardColor").css("background-color", colorVar);
    $(".randomColor").css("color", colorVar);

  } else {
    $(".showError").text(
      `There was an error processing your request; ${response}`
    );
  }
}
