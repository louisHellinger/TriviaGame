 
$(document).ready(function(){


var myQuestions = [
  {
    question: "1. Cher has appeared in more than one episode.",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: "True"
  },
  {
    question: "2. Who did Rosario cheat on Jack with while they were married?",
    answers: {
      a: "Pharmacist",
      b: "Gardener",
      c: "Back-Up Pharmacist",
      d: "Stan"
    },
    correctAnswer: "Gardener"
  },

  {
    question: "3. We all know Madonna has appeared in the show but who did her character live with for the duration of the episode?",
    answers: {
      a: "Will",
      b: "Grace",
      c: "Jack",
      d: "Karen"
    },
    correctAnswer: "Karen"
  },


 {
    question: "4. What was the name of Karen's horse?",
    answers: {
      a: "Sampson",
      b: "Little Wonder",
      c: "Lemar",
      d: "Little Jack"
    },
    correctAnswer: "Lemar"
  },

    {
    question: "5. Elliott's mother (played by Rosie O'Donnell) is which of the following:",
    answers: {
      a: "Jack's ex-wife",
      b: "Gay",
      c: "A moor-man",
      d: "Necrophiliac"
    },
    correctAnswer: "Gay" //b
  },


    {
    question: "6. Fill in this Will quote to Karen: 'A butcher, A baker, A _________ maker'",
    answers: {
      a: "Vodka",
      b: "Bloody Mary",
      c: "Painkiller",
      d: "Anti-Depressant"
    },
    correctAnswer: "Painkiller" //c
  },

    {
    question: "7. Jack bought a scooter off eBay because it was connected to which singer?",
    answers: {
      a: "Enrique Inglesias",
      b: "Clay Aitken",
      c: "Elvis Presley",
      d: "Ricky Martin"
    },
    correctAnswer: "Ricky Martin"//d
  },


      {
    question: "8.Grace's design company is called 'Designs By Grace'.",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "False" //b
},

	{
    question: "9. Which famous British actress played Lyle's obnoxious daughter who disliked Karen?",
    answers: {
      a: "Minnie Driver",
      b: "Julia Sawhala",
      c: "Kelly Brooke",
      d: "Tamzin Outhwaite"
    },
    correctAnswer: "Minnie Driver" //a
  },

  {
    question: "10. What was the name of Jack's Bird?",
    answers: {
      a: "Guapo",
      b: "Orion",
      c: "Chi Chi",
      d: "Jackie"
    },
    correctAnswer: "Guapo" //a
  }


];


// $("#question").addClass("noShow");
// $("#progress").addClass("noShow");
$("#startQuiz").click(resetGame);

var quizContainer = $("#quiz");
var resultsContainer = $("#results");
var submitButton = $("#submit");

var currentQuestion=" ";
var currentAnswer= "" ;
var output = "";
var num = 0;
var questionNumber = 0;
var number = 0;
var countdownTimer;

 

function delay() {
  setTimeout(function(){ 
    //count = 2;
    

    if (questionNumber <= myQuestions.length) {
      questionNumber ++;
      resetGame();
  } else {
    alert("game over");

  }

  }, 3000);
}


function resetGame(){

  //console.log("game will reset now");
  $("#progress").removeClass("noShow");
  $("#answerContainer").empty();  
  $("#question").removeClass("noShow");
  $("#answerContainer").removeClass("results");
  $("#progress").removeClass("noShow");


  console.log("this is the question number :" + questionNumber);

  loadQuestion();
     
}

// var countdownTimer;


var count = 20;

function gameTime() {

  count--;
  console.log(count);

 


// === for a progress ==== //
  percent = count * 5;

  $("#percent").html("You have <bold>" + count + "</bold> seconds left.");
  $("#bar").css("width", percent + "%");
// === end of progess bar


  if (count === 0 ){
    $("#progress").addClass("noShow");
    wrongAnswer();
    
    stopTime();
    

  }

 
}

function stopTime() {
    clearInterval(gameTimer);
    count = 20;
   
}


function wrongAnswer () {

        $("#answerContainer").empty();
         $("#progress").addClass("noShow");

         if (count <= 0) {
        $("#answerContainer").append("<div class='results'>You ran out of time!</div>").addClass("results");

        delay();
        


      } else {


        $("#answerContainer").append("<div class='results'>Wrong Answer!</div>").addClass("results");
        
          delay();
      
      } 


        $("#answerContainer").append("<div class='results'>The correct answer is:</div>").addClass("results");
        $("#answerContainer").append("<div class='results'>" + currentAnswer + "</div>").addClass("results");

              
}




function loadQuestion() { 

  //start timer
   gameTimer = setInterval(gameTime, 1000);




  console.log("load question is working. This is question #" + questionNumber);

  
  var answersArray = [myQuestions[questionNumber].answers.a, myQuestions[questionNumber].answers.b, myQuestions[questionNumber].answers.c, myQuestions[questionNumber].answers.d];


  //display question
  currentQuestion = myQuestions[questionNumber].question;
  $("#question").html(currentQuestion);

  

  //set correct answer

  currentAnswer = myQuestions[questionNumber].correctAnswer;


for (var i=0; i<answersArray.length;i++){

  var num = i;
  var letter = answersArray[i];

  if (letter != undefined) { 

    var questionButton = $("<button>");
    questionButton.addClass("newAnswerDiv button");
    questionButton.attr("data-value", letter);
    questionButton.html(letter);

    $("#answerContainer").append(questionButton);


  } 
  
 $("#progress").removeClass("noShow");


  
}

//BUTTON CODE


  $(".button").on("click", function() {
    console.log("button clicked");
  

      stopTime();

      var clicked = ($(this).attr("data-value"));


      if (clicked === currentAnswer) {

          console.log("correct answer");
          console.log("clicked answer " + clicked);

        $("#question").empty();
        $("#answerContainer").empty(); 
        $("#progress").addClass("noShow");      
        $("#answerContainer").append("<div class='results'>CORRECT!</div>").addClass("results");


          delay();

        } else { 
          console.log("incorrect answer");
          console.log("clicked answer " + clicked + " " + currentAnswer);
            $("#progress").addClass("noShow");
            wrongAnswer();
            
        }

});






}

//console.log("i'm at the end");

//$("mainImage").load(initGame());



});

