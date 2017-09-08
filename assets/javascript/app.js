 
$(document).ready(function(){

var myQuestions = [
  {
    question: "1. Cher has appeared in more than one episode.",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: "True",
    image: "assets/images/Cher.gif"
  },

  {
    question: "2. Who did Rosario cheat on Jack with while they were married?",
    answers: {
      a: "Pharmacist",
      b: "Gardener",
      c: "Back-Up Pharmacist",
      d: "Stan"
    },
    correctAnswer: "Gardener",
    image: "assets/images/Rosario.jpg"
  },

  {
    question: "3. We all know Madonna has appeared in the show but who did her character live with for the duration of the episode?",
    answers: {
      a: "Will",
      b: "Grace",
      c: "Jack",
      d: "Karen"
    },
    correctAnswer: "Karen",
    image: "assets/images/Madonna.jpg"
  },


 {
    question: "4. What alias does Karen use when she wants to go unnoticed?",
    answers: {
      a: "Wanda Pepper",
      b: "Princess Consuela Bananahammock",
      c: "Anastasia Beaverhausen",
      d: "Regina Badgerhöffer"
    },
    correctAnswer: "Anastasia Beaverhausen",
    image: "assets/images/Anastasia.jpg"
  },

    {
    question: "5. Elliott's mother (played by Rosie O'Donnell) is which of the following:",
    answers: {
      a: "Jack's ex-wife",
      b: "Gay",
      c: "A moor-man",
      d: "Necrophiliac"
    },
    correctAnswer: "Gay", //b
    image: "assets/images/Rosie.jpg"
  },


    {
    question: "6. Fill in this Will quote to Karen: 'A butcher, A baker, A _________ maker'",
    answers: {
      a: "Vodka",
      b: "Bloody Mary",
      c: "Painkiller",
      d: "Anti-Depressant"
    },
    correctAnswer: "Painkiller", //c
    image: "assets/images/Karen.gif"
  },

    {
    question: "7. Jack bought a scooter off eBay because it was connected to which singer?",
    answers: {
      a: "Enrique Inglesias",
      b: "Clay Aitken",
      c: "Elvis Presley",
      d: "Ricky Martin"
    },
    correctAnswer: "Ricky Martin",//d
    image: "assets/images/Jack.gif"
  },


      {
    question: "8. Grace's design company is called 'Designs By Grace'.",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "False", //b
    image: "assets/images/Grace.gif"
},

  {
    question: "9. Which famous British actress played Lyle's obnoxious daughter who disliked Karen?",
    answers: {
      a: "Minnie Driver",
      b: "Julia Sawhala",
      c: "Kelly Brooke",
      d: "Tamzin Outhwaite"
    },
    correctAnswer: "Minnie Driver", //a
    image: "assets/images/Minnie.gif"
  },

  {
    question: "10. Who was Karen's nemesis?",
    answers: {
      a: "Beverly Diane",
      b: "Beverly Brian",
      c: "Beverly Leslie",
      d: "Beverly Hills"
    },
    correctAnswer: "Beverly Leslie", //c
    image: "assets/images/beverlyLeslie.jpg"
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
  if (questionNumber === 9) {
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


  //console.log("this is the question number :" + questionNumber);
  gameTimer = setInterval(gameTime, 1000);
  loadQuestion();

     
}


var count = 21;

function gameTime() {

  count--;
  //console.log(count);

    if (count === 0 ){
      stopTime();

      missedCounter ++;

    $("#answerContainer").empty();
    $("#percent").empty();

    $("#progress").addClass("noShow");
    $("#question").addClass("noShow");

      if (missedCounter === 1) {
            $("#answerContainer").append("<div class='snottyComment'>You ran out of time...<br>Are you Ok?</div>");

          } else if (missedCounter === 2) { $("#answerContainer").append("<div class='snottyComment'>You ran out of time... <br> Did you fall asleep?</div>");


          } else { $("#answerContainer").append("<div class='snottyComment'>You ran out of time... AGAIN!</div>");}

             //load Image
         var img = $("<img = id='answerIMG'>");
         imageName = myQuestions[questionNumber].image
         img.attr("src", imageName)
         $("#answerContainer").append(img);


    
        $("#answerContainer").append("<div class='results'>The correct answer is: <br>" + currentAnswer + "</div>");


          delay();
    
 }


// === for a progress bar ==== //
  percent = count * 5;

  $("#percent").html("You have <bold>" + count + "</bold> seconds left");
  $("#bar").css("width", percent + "%");


// === end of progess bar ==== //
 
}


function stopTime(){
    clearInterval(gameTimer);
    count = 21;
   
}


function wrongAnswer() {
        wrongCounter ++;

        $("#answerContainer").empty();
        $("#question").addClass("noShow");
        $("#percent").empty();
        $("#progress").addClass("noShow");
         

          if (wrongCounter === 1) {$("#answerContainer").append("<div class='snottyComment'>Wrong Answer<br>(PS, That was an easy one.)</div>");
        }  else if (wrongCounter === 2) {
            $("#answerContainer").append("<div class='snottyComment'>Wrong Answer<br>Did you even watch this show?</div>");

          } else if (wrongCounter === 4) {
            $("#answerContainer").append("<div class='snottyComment'>Wrong Answer<br>Maybe you should start binge-watching.</div>");

          } else { $("#answerContainer").append("<div class='snottyComment'>Wrong Again.</div>")
        }

        //load Image
         var img = $("<img = id='answerIMG'>");
         imageName = myQuestions[questionNumber].image
         img.attr("src", imageName)
         $("#answerContainer").append(img);
          

        $("#answerContainer").append("<div class='results'>The correct answer is: <br>" + currentAnswer +"</div>");
        

        //$("#answerContainer").append("<div class='results'>" + currentAnswer + "</div>").addClass("results");

     
        
          delay();       
             
}



function delay() {
  setTimeout(function(){ 

    if (questionNumber ===  9) {  

      displayScore();

      } else if (questionNumber <=myQuestions.length-1) {
      console.log("increments number after delay");
      questionNumber ++;
      console.log("question number afer ++ " + questionNumber);
      resetGame();

  } 

  }, 3000);
}


function displayScore(){
        $("#answerContainer").empty(); 
        $("#question").addClass("noshow");
        

        if (rightCounter === 10) { $("#answerContainer").append("<div class='scoreHeader'>PERFECT SCORE! <br>You are a SUPER FAN!</div>");

        } else if ( rightCounter >= 6) {$("#answerContainer").append("<div class='scoreHeader'>YOU DID GREAT!<br> Here's your Results:</div>");

      }else if ( rightCounter <= 10) {$("#answerContainer").append("<div class='scoreHeader'>You only got<br>" + rightCounter + " out of 10 correct. <br> Start binge-watching now! </div>");


      } else { $("#answerContainer").append("<div class='scoreHeader'>Here's how you did: </div>");} ;



       $("#answerContainer").append("<div class='score'>right " + rightCounter+ "</div>");
        
       $("#answerContainer").append("<div class='score'>Wrong " + wrongCounter + "</div>");     

        $("#answerContainer").append("<div class='score'>missed " + missedCounter+ "</div>");

        $("#answerContainer").append("<div class='plainText'>Tune in on September 28 @ 9PM EST <br>for the season Premiere!</div>");

      //alert("at the end of the game, the score will appear");

      $("#startQuiz").click(resetGame);


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

        //$("#question").empty();
        $("#percent").empty();
        $("#answerContainer").empty(); 
        $("#question").addClass("noShow");
        $("#progress").addClass("noShow");      
        $("#answerContainer").append("<div>THAT'S CORRECT!</div>").addClass("correct");
         
         //load Image
         var img = $("<img = id='answerIMG'>");
         imageName = myQuestions[questionNumber].image
         img.attr("src", imageName)
         $("#answerContainer").append(img);

        rightCounter++;

        delay();

        } else { 
          //console.log("incorrect answer");
          //console.log("clicked answer " + clicked + " " + currentAnswer);
          $("#progress").addClass("noShow");
          wrongAnswer();            
        }

      
});


}




}); //Closing brackets for doc.ready

