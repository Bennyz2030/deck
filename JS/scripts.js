$(document).ready(function() {
  let deck = ["ace", "2", "3", "4", "5", "6", "7","8","9","10","jack","queen","king"];
  let suits = ["hearts", "spades","clubs","diamonds"];
  suits.forEach(function(suit) {
    deck.forEach(function(card) {
      $("ul#output").append("<li>" + card + " of " + suit + "</li>");
    });
  });
 });