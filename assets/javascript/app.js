 
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
    question: "4. What alias does Karen use when she wants to go unnoticed?",
    answers: {
      a: "Wanda Pepper",
      b: "Princess Consuela Bananahammock",
      c: "Anastasia Beaverhausen",
      d: "Regina Badgerhöffer"
    },
    correctAnswer: "Anastasia Beaverhausen"
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
    question: "8. Grace's design company is called 'Designs By Grace'.",
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
    question: "10. Who was Karen's nemesis?",
    answers: {
      a: "Beverly Diane",
      b: "Beverly Brian",
      c: "Beverly Leslie",
      d: "Beverly Hills"
    },
    correctAnswer: "Beverly Leslie" //c
  }

];


//console.log(myQuestions);

$("#startQuiz").click(resetGame);


var currentQuestion=" ";
var currentAnswer= "" ;
var output = "";
var num = 0;
var questionNumber = 0;
var number = 0;
var countdownTimer;

var wrongCounter = 0;
var rightCounter = 0;
var missedCounter = 0;





function resetGame(){
  if (questionNumber ===10) {
    stopTime();
    displayScore();
    $("#progress").addClass("noShow");
    $("#answerContainer").empty(); 
    $("#question").addClass("noShow");

  }

  //console.log("game will reset now");
  $("#progress").removeClass("noShow");
  $("#answerContainer").empty();  
  $("#question").removeClass("noShow");
  $("#answerContainer").removeClass("results");


  console.log("this is the question number :" + questionNumber);
  gameTimer = setInterval(gameTime, 1000);
  loadQuestion();

     
}


var count = 10;

function gameTime() {

  count--;
  console.log(count);

    if (count === 0 ){
      stopTime();

    $("#answerContainer").empty();
    $("#percent").empty();

    $("#progress").addClass("noShow");
    $("#answerContainer").append("<div class='results'>You ran out of time!</div>").addClass("results");
    $("#answerContainer").append("<div class='results'>The correct answer is:</div>").addClass("results");
    $("#answerContainer").append("<div class='results'>" + currentAnswer + "</div>").addClass("results");
        missedCounter ++;
          delay();
    
 }


// === for a progress bar ==== //
  percent = count * 10;

  $("#percent").html("You have <bold>" + count + "</bold> seconds left");
  $("#bar").css("width", percent + "%");


// === end of progess bar ==== //
 
}


function stopTime(){
    clearInterval(gameTimer);
    count = 10;
   
}


function wrongAnswer() {

        $("#answerContainer").empty();
        $("#percent").empty();
        $("#progress").addClass("noShow");


        $("#answerContainer").append("<div class='results'>Wrong Answer!</div>").addClass("results");

        $("#answerContainer").append("<div class='results'>The correct answer is:</div>").addClass("results");
        $("#answerContainer").append("<div class='results'>" + currentAnswer + "</div>").addClass("results");

          wrongCounter ++;
        
          delay();       
             
}



function delay() {
  setTimeout(function(){ 

    if (questionNumber ===  10) {  

      displayScore();

      } else if (questionNumber <=myQuestions.length-1) {
      console.log("increments number after delay");
      questionNumber ++;
      console.log("question number afer ++ " + questionNumber);
      resetGame();

  } 

  }, 1000);
}


function displayScore(){
        $("#question").empty();
        $("#answerContainer").empty(); 

        $("#answerContainer")
        .append("<div class='scoreheader'>Here's how you did: </div>");
        
       $("#answerContainer").append("<div class='score'>Wrong " + wrongCounter + "</div>");

        $("#answerContainer").append("<div class='score'>right " + rightCounter+ "</div>");

        $("#answerContainer").append("<div class='score'>missed " + missedCounter+ "</div>");

      //alert("at the end of the game, the score will appear");

}

function loadQuestion() {
  console.log(myQuestions.length);

  //start timer
   

  //console.log("load question is working. This is question #" + questionNumber);

  
  var answersArray = [myQuestions[questionNumber].answers.a, myQuestions[questionNumber].answers.b, myQuestions[questionNumber].answers.c, myQuestions[questionNumber].answers.d];

  console.log(answersArray);

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
    //console.log("button clicked");
      clearInterval(gameTimer);
      stopTime();


      var clicked = ($(this).attr("data-value"));


      if (clicked === currentAnswer) {

          //console.log("correct answer");
          //console.log("clicked answer " + clicked);

        $("#question").empty();
        $("#percent").empty();
        $("#answerContainer").empty(); 
        $("#progress").addClass("noShow");      
        $("#answerContainer").append("<div class='results'>CORRECT!</div>").addClass("results");
        rightCounter++;

        delay();

        } else { 
          console.log("incorrect answer");
          console.log("clicked answer " + clicked + " " + currentAnswer);
          $("#progress").addClass("noShow");
          wrongAnswer();            
        }

      
});


}




}); //Closing brackets for doc.ready

