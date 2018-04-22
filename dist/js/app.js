//quiz begins, no answer
var correct = 0;

var score = document.querySelector('.score');
var submitButton = document.querySelector('.submitbtn');
var questionsContainer = document.querySelector('.questions-container');

if (submitButton) {
  submitButton.addEventListener('click', function(){
  // ask questions
  var answer1 = document.querySelector('#question1').value;
  var answer2 = document.querySelector('#question2').value;
  var answer3 = document.querySelector('#question3').value;
  var answer4 = document.querySelector('#question4').value;
  var answer5 = document.querySelector('#question5').value;
  console.log(answer1 + answer2 + answer3 + answer4 + answer5);

   if (answer1.toUpperCase() === 'DAVID TENNANT') {
      correct += 1;
   }

   if (answer2.toUpperCase() === 'BLUE') {
      correct += 1;
   }
  
   if (answer3.toUpperCase() === 'ROSE TYLER' || answer3.toUpperCase() === 'ROSE') {
    correct += 1;
   }
  
   if (answer4.toUpperCase() === 'DALEKS' || answer4.toUpperCase() === 'THE DALEKS') {
    correct += 1;
   }
  
   if (answer5.toUpperCase() ==='K9' || answer5.toUpperCase() === 'K-9') {
    correct += 1;
   }
  
   // output results
   score.style.display = "block";
   questionsContainer.style.display = "none";
   score.innerHTML =  '<p>You got " + correct + " out of 5 questions</p>';
  
   // output rank
   if (correct === 5) {
    score.innerHTML = '<h2>You answered 5/5 correct. Well done! You know your Doctor Who!</h2/><p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>';
   } else if ( correct === 4 ){
    score.innerHTML =  '<h2>You got 4/5 correct.</h2><p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <strong> You know some stuff about Doctor Who!</strong></p>'
   }  else if ( correct === 3){
    score.innerHTML =  '<h2>You got 3/5 correct.</h2><p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <strong> You know some stuff about Doctor Who!</strong></p>'
   } else if ( correct === 2){
    score.innerHTML =  '<h2>You got 2/5 correct.</h2><p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <strong> You know some stuff about Doctor Who!</strong></p>'
   } else if ( correct === 1) {
    score.innerHTML =  '<h2>You got 1/5 correct.</h2><p><i class="fa fa-star" aria-hidden="true"></i><strong> You need to go watch some more Doctor Who!</strong></p>'
   } else {
    score.innerHTML =  '<h2>You got 0/5 correct.</h2> <p><strong>You really need to go watch more Doctor Who!</strong></p>'
    }
  });
};

// --- Growing Div Script --- //
var widthsize = 0;
var mygrowingdiv = document.getElementById("growme");

var listen = document.getElementById("myButton");
var listenTwo = document.getElementById("myButtonTwo");

if (listen){
    listen.addEventListener('click', function(){
             
    if (widthsize === 100) {
      widthsize = 0;
    } else {
      widthsize = widthsize + 20;
    }
    mygrowingdiv.style.width = widthsize + "%";

  });
};

if (listenTwo) {
  listenTwo.addEventListener('click', function(){

      if (widthsize > 0) {
        widthsize = widthsize - 20;
      }

      mygrowingdiv.style.width = widthsize + "%";
    
  });
};

// Parallax Slider Home page
  if(document.querySelector(".parallax")) {
    var parallax = document.querySelector(".parallax"),
    speed = 0.5;

      window.onscroll = function(){
        var windowYOffset = window.pageYOffset;
        var parallaxBackgrounPos = "50% " + (windowYOffset * speed) + "px";
          parallax.style.backgroundPosition = parallaxBackgrounPos;
  };
};

// Shopping List jQuery Script

$('#addBtn').on('click', function(){
    $('#addBtn').text('loading...')
    setTimeout(function(){
      $('#addBtn').hide();
      $('form').show();
    }, 200); 
  });
  
  $('#addtolistBtn').on('click', function(e){
    e.preventDefault();
    $('.shoppingList p').hide();
  var item = $('input').val();
    if(item != '') {
    $('.shoppingList').append('<li>' + item +'</li>');
    $('#itemInput').val('');
    }
  });

  // Accordion Script 

  $('.question').on('click', function(){
  $(this).next().toggleClass('answerDrop');
  
  if($(this).next().hasClass('answerDrop')){
  $(this).next().siblings().removeClass('answerDrop');    }
});

 

  