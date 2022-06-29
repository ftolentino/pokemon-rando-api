import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PokemonAPI from './js/PokemonAPI.js';

$(document).ready(function () {
  $('#pokeBTN').click(function() { 
    // UI code here
    let pokemon = $('#pokeBTN').val();
    let promise = PokemonAPI.getPokemon(pokemon);
    promise.then(function(response) {
      const body = JSON.parse(response);
    });
  });
});
