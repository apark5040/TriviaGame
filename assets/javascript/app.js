//Start the main page with a "Press here to start" button. Button will start timer and show questions.

var count = 60;
var timeStart;

var headMessage = $("<p>");
headMessage.attr("id", "head");
$("#app").append(headMessage);
$("#head").text("Press the start button to begin");

var startButton = $("<button>");
startButton.addClass("btn btn-primary btn-lg");
startButton.attr("type", "button");
startButton.text("Start");

var timerHead = $("<div>");
timerHead.attr("id","timer");
$("#app").append(timerHead);
$("#timer").html("<h2>Time Remaining: "+count+"</h2>");



$("#app").append(startButton);




$(startButton).click(function(){

    $("#head").addClass("hide");
    $(".btn").addClass("hide");
    $(".container").removeClass("hide");

    clearInterval(timeStart);
    timeStart = setInterval(countdown, 1000);

    function countdown(){
        count--;
        $("#timer").html("<h2>Time Remaining: "+count+"</h2>");

        if(count <= 0){
            stop();
            alert("Time up");
        }
    }

    
    
    
});