//sanity check
console.log("JavaScript is connected!");

//A = 65 L = 76 spacebar = 32
 //

 // window.onLoad = function() {
var finishLine = 1000;
var startLine = 10;
var $player1 = $('#player1');
var $player2 = $('#player2');

$('.btn-primary').on('click', function(event) {
  document.location.reload(true);
  })

 $(document).keydown(function(e) {

      if (e.keyCode == 65) {
          $('#player1').css('left', '+=10');
          checkPosition($player1);
          }

      if(e.keyCode == 76 ) {
      $('#player2').css('left', '+=10');
      checkPosition($player2);
      }
 });
//

function checkPosition($player) {
  console.log((parseInt($player.css('left'), 10)))
  if (parseInt($player.css('left'), 10) > finishLine) {

    alert("Yay! Crossed finish line!");
  };
}

//  }
// document.addEventListener('keydown', stopDivs)
 // }
//

//
//    }
//  }
// }
