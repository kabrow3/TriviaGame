$(document).ready(function () {
  
  //setting the questions, choices and answers into a variable
  var questions = [
    {
    question: "Who was the first superhero to appear in an American comic book?", 
    choices: ["Batman", "Captain America", "Spider-Man", "Superman"], 
    answer: "Superman"
    },
    {
    question: "What was the comic that began Stan Lee's Marvel Universe?", 
    choices: ["Amazing Spider-Man", "Captain America", "Fantastic Four", "Invincible Iron Man"], 
    answer: "Fantastic Four"
    },
    {
    question: "Which comic book property is the most financially successful?", 
    choices: ["Batman", "Avengers", "Spider-Man", "X-Men"], 
    answer: "Spider-Man"
    }
  ];

  var timer;

  $("#start").click(function() {

    $("#start").hide();
    $("#begin").empty();

//   for (var i=0;i<questions.length;i++) {

      //function for setting the 30 second countdown timer
      function setTimer() {
        var questionTime = new Date().getTime() +  (1000 * 30);
        clearInterval(timer);
        timer = setInterval(function() {
          var now = new Date().getTime();
          var distance = questionTime - now;
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          //conditional loop for effects 
          if (distance < 0) {
            clearInterval(timer);
            $("#timer").html("<h3>Time Remaing: 0 Seconds</h3>");
            $("#questions").html("<h2>You Ran Out of Time!</h2>")
            $("#choices").html("<h3>The correct answer was " + questions[i].answer + "</h3>")
            setTimeout(logQuestion, 5000);
          } else {
            $("#timer").html("<h3>Time Remaining: " + seconds + " seconds</h3> ");
          }
        }, 1000);
      }

      //function to write the current trivia Question
      function logQuestion() {
        $("#timer").show();
        setTimer();
        $("#questions").empty();
        var thisQuestion = questions[0].question;
        //console.log(thisQuestion);
        $("#questions").append('<h2>' + thisQuestion + '</h2>')
        $("#choices").empty()

        //render Choices
        for(var j=0; j < questions[0].choices.length; j++) {
          var thisChoice = $("<button>");
          thisChoice.addClass("choice");
          thisChoice.attr("choice-name", questions[0].choices[j]);
          thisChoice.attr("correctAnswer", questions[0].answer);
          thisChoice.text(questions[0].choices[j]);
          $("#choices").append(thisChoice);
        }
      }  

      function nextQuestion() {
        $("#timer").show();
        setTimer();
        $("#questions").empty();
        var thisQuestion = questions[1].question;
        //console.log(thisQuestion);
        $("#questions").append('<h2>' + thisQuestion + '</h2>')
        $("#choices").empty()

        //render Choices
        for(var j=0; j < questions[1].choices.length; j++) {
          var thisChoice = $("<button>");
          thisChoice.addClass("choice");
          thisChoice.attr("choice-name", questions[1].choices[j]);
          thisChoice.attr("correctAnswer", questions[1].answer);
          thisChoice.text(questions[1].choices[j]);
          $("#choices").append(thisChoice);
        }

      }

      function lastQuestion() {
        $("#timer").show();
        setTimer();
        $("#questions").empty();
        var thisQuestion = questions[2].question;
        //console.log(thisQuestion);
        $("#questions").append('<h2>' + thisQuestion + '</h2>')
        $("#choices").empty()

        //render Choices
        for(var j=0; j < questions[2].choices.length; j++) {
          var thisChoice = $("<button>");
          thisChoice.addClass("choice");
          thisChoice.attr("choice-name", questions[2].choices[j]);
          thisChoice.attr("correctAnswer", questions[2].answer);
          thisChoice.text(questions[2].choices[j]);
          $("#choices").append(thisChoice);
        }

      }
      
      //resolve user Choice
      function evalChoice() {
        console.log($(this).attr("choice-name"));
        if ($(this).attr("choice-name") == $(this).attr("correctAnswer")) {
          $("#timer").hide();
          $("#questions").html("<h2> You are Correct!</h2>");
          $("#choices").empty();
          if ($(this).attr("correctAnswer") == "Superman") {
            setTimeout(nextQuestion, 3000);
          } else if ($(this).attr("correctAnswer") == "Fantastic Four") {
            setTimeout(lastQuestion, 3000);
          } else if ($(this).attr("correctAnswer") == "Spider-Man") {
            $("#choices").html("If you want to play again, just click the button!");
            $("#start").show();
          }
          
        } else {
          $("#timer").hide();
          $("#questions").html("<h2> Incorrect! </h2>");
          $("#choices").empty();
          $("#choices").html("<h3>The correct answer was " + questions[i].answer + "</h3>");
          if ($(this).attr("correctAnswer") == "Superman") {
            setTimeout(nextQuestion, 3000);
          } else if ($(this).attr("correctAnswer") == "Fantastic Four") {
            setTimeout(lastQuestion, 3000);
          } else if ($(this).attr("correctAnswer") == "Spider-Man") {
            $("#choices").html("If you want to play again, just click the button!");
            $("#start").show();
          }      
        }
      }

      $(document).on("click", ".choice", evalChoice); 

      logQuestion();
  //  }  
  });  

})
  



