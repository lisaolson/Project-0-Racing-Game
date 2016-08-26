//sanity check
console.log("JavaScript is connected!");

//A = 65 L = 76 spacebar = 32
 //
 $(document).keydown(function(e) {
    if (e.keyCode == 65) {
      $('#player1').css('left', '+=10');
    }
    if(e.keyCode == 76 ) {
      $('#player2').css('left', '+=10');
    }
 });
