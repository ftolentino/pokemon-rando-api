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
        console.log(body.data[249].images.large);
        testString = body.data[249].images.large;
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


