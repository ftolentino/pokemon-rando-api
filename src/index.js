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
        console.log(body.results[0].name);
        testString = body.results[0].name;
        console.log(testString);
        $("#output").text(testString);
      },
      function (error) {
        $(".showError").text(
          `There was an error processing your request; ${error}`
        );
      }
    );
  });
});
