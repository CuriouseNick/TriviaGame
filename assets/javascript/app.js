//Function timer
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    //Init count
    var questionsCount = 1;
    questions(questionsCount);
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $('#timer').text("Time remaining " + minutes + ":" + seconds);
        
        if (--timer < 0) {
            timer = duration;
        }
        if (timer == 0) {
            questionsCount++;
            //Change to call back functions separately
            questions(questionsCount);
        }
    }, 1000);
}

//Timer and count
jQuery(function ($) {
    var fiveMinutes = 5;
        //display = $('#timer');
    startTimer(fiveMinutes);
});

//Global counts
var CorrectAnsw = 0;
var IncorrectAnsw = 0;

function questions(questionsCount){
    $('#score').html("Question: " + questionsCount);
    //console.log(questionsCount);
    if(questionsCount == 1){
        $('#q').html("Who invented first airplane?");
        $('#q1').html("Wright brothers");
        $("#q1").on("click", function() {
            CorrectAnsw++;
            console.log("Correct" + CorrectAnsw);
        });
        $('#q2').html("Leo Baekeland");
        $("#q2").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q3').html("Mary Phelps Jacob");
        $("#q3").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q4').html("Gidoen Sundback");
        $("#q4").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
    }
    if(questionsCount == 2){
        $('#q').html("Inventor of plastic?");
        $('#q1').html("John Thompson");
        $("#q1").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q2').html("Karel Capek");
        $("#q2").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q3').html("Leo Baekeland");
        $("#q3").on("click", function() {
            CorrectAnsw++;
            console.log("Correct" + CorrectAnsw);
        });
        $('#q4').html("Frank Whittle");
        $("#q4").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
    }
    if(questionsCount == 3){
        $('#q').html("Who invented the jet engine?");
        $('#q1').html("George deMestral	");
        $("#q1").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q2').html("Percy LeBaron Spencer");
        $("#q2").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q3').html("Percy Shaw");
        $("#q3").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q4').html("Frank Whittle");
        $("#q4").on("click", function() {
            CorrectAnsw++;
            console.log("Correct" + CorrectAnsw);
        });
    }
    if(questionsCount == 4){
        $('#q').html("e=mc2 is...?");
        $('#q1').html("Nothing");
        $("#q1").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q2').html("Light speed in vacuum");
        $("#q2").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q3').html("Mass–energy equivalence");
        $("#q4").on("click", function() {
            CorrectAnsw++;
            console.log("Correct" + CorrectAnsw);
        });
        $('#q4').html("Einstein's formula");
        $("#q4").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
    }
    if(questionsCount == 5){
        $('#q').html("The first personal computer was invented in...");
        $('#q1').html("1975");
        $("#q1").on("click", function() {
            CorrectAnsw++;
            console.log("Correct" + CorrectAnsw);
        });
        $('#q2').html("1981");
        $("#q2").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q3').html("1939");
        $("#q3").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
        $('#q4').html("1945");
        $("#q4").on("click", function() {
            IncorrectAnsw++;
            console.log(IncorrectAnsw);
        });
    }
    if(questionsCount == 6){
        $('#q').html("Your result is:");
        $('#q1').html("");
        $('#q2').html("Correct answers: " + CorrectAnsw);
        $('#q3').html("");
        $('#q4').html("Incorrect answers: " + IncorrectAnsw);
    }

}