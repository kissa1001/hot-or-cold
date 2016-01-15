
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});




//Secret number between 1 and 100 
var secretNum = Math.floor(Math.random()*100+1);
  var guess = 0;
//Listen to user guess
$('#guessButton').click (function(){
  var userGuess = $('#userGuess').val();
  $('#userGuess').val('');
    if(userGuess<100 && !isNaN(userGuess) && userGuess % 1 ==0) {
      guess++;
      $('#count').text(guess);
      $('#guessList').append('<li>'+ userGuess + '</li>');

        if(userGuess === secretNum){
          var message = "Yeahh You got it from the first guess!";
        }
        else {
          var difference = Math.abs(userGuess - secretNum);
            console.log(difference);
          if(difference <= 10 && difference!=0){
            var message= "Very Hot!";
          }
          else if (difference < 20 && difference!=0) {
            var message= "Hot!";
          }
          else if (difference <30 && difference!=0){
            var message= "Warm!";
          }
          else if (difference <50 && difference!=0){
            var message= "Cold!";
          }
          else if(difference >50 && differece!=0) {
            var message= "Ice Cold!";
          }
          else{
            var message = "Win!";
          }
        }

      $('#feedback').text(message);
      console.log(message);
      return false;
    }
    else{
      confirm('Please enter a Number between 1 and 100');
      return false;
    };
});

$('.new').click(function(){
   location.reload();
});
}); 