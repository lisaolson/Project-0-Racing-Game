//sanity check
console.log("JavaScript is connected!");

//A = 65 L = 76 spacebar = 32
 //

// window.onLoad = function() {
var finishLine = 1105;
var startLine = 10;
var $player1 = $('#player1');
var $player2 = $('#player2');

$('.btn-primary').on('click', function(event) {
  document.location.reload(true);
  })

 $(document).keydown(function(e) {

      if (e.keyCode == 65) {
          $('#player1').css('left', '+=10');
          var player1 = $('#player1').css('left');
          // checkPosition($player1);
          if(parseInt($player1.css('left'), 10) > finishLine) {
            alert("Phew! You made it!");
          }
          }

      if(e.keyCode == 76 ) {
      $('#player2').css('left', '+=10');
      var player2 = $('#player2').css('left');
      // checkPosition($player2);
        if((parseInt($player2.css('left'), 10) > finishLine)) {
          alert("Better luck next time human!");
          // document.getElementById("message").innerHTML = "Better luck next time human!";
        }
      }

 });
//

// function checkPosition($player) {
//   console.log((parseInt($player.css('left'), 10)))
//   if (parseInt($player.css('left'), 10) > finishLine) {

//     var element = document.getElementById("h2");
// element.innerHTML = "Nice job"
//   };
// }

//  }
// document.addEventListener('keydown', stopDivs)
 // }
