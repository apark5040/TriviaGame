//Start the main page with a "Press here to start" button. Button will start timer and show questions.

var count = 30;
var timeStart;

var right =0;
var wrong =0;
var isChecked1, isChecked2, isChecked3, isChecked4, isChecked5;

var headMessage = $("<p>");
headMessage.attr("id", "head");
headMessage.addClass("col-md-12");
$("#app").append(headMessage);
$("#head").text("Press the start button to begin");

var startButton = $("<button>");
startButton.addClass("btn btn-primary btn-lg btn-start col-md-12");
startButton.attr("type", "button");
startButton.text("Start");

var timerHead = $("<div>");
timerHead.attr("id","timer");
timerHead.addClass("col-md-12");
$("#app").append(timerHead);
$("#timer").html("<h2>Time Remaining: "+count+"</h2>");



$("#app").append(startButton);


function questionRow(qNum,question, one, two, three, four, five){
    var row1 = $("<div>");
    var row2 = $("<p>");
    var formButtons = $("<form>");

    row1.addClass("row");
    row1.attr("id", "question");
    row2.addClass("col-md-12 questionAnswer");
    row2.text(question);
    formButtons.attr("id", "set"+qNum);

    $(".questionBox").append(row1);
    $("#question").append(row2);
    $("#question").append(formButtons);


    function correctAns(){
        if(one.charAt(0) == "*"){
            $("#"+qNum+"button0").attr("value", "1");
        }
        else if(two.charAt(0) == "*"){
            $("#"+qNum+"button1").attr("value", "1");
        }
        else if(three.charAt(0) == "*"){
            $("#"+qNum+"button2").attr("value", "1");
        }
        else if(four.charAt(0) == "*"){
            $("#"+qNum+"button3").attr("value", "1");
        }
        else if(five.charAt(0) == "*"){
            $("#"+qNum+"button4").attr("value", "1"); 
        }

    }

    for(var i = 0; i < 5; i++){

        var radioButton = $("<input>");
        var buttonLabel = $("<label>");
        radioButton.attr("type", "radio");
        radioButton.attr("id", qNum+"button"+i);
        radioButton.attr("name", "question"+qNum);
        buttonLabel.attr('id', qNum+"answer"+i);

        
        
        
        $(formButtons).append(radioButton, buttonLabel);

        //Adding an attribute for the correct answer. Will call the attribute later when checking answers

        correctAns();
    }
       

    $("#"+qNum+"answer0").text(one.replace('*', ''));
    $("#"+qNum+"answer1").text(two.replace('*', ''));
    $("#"+qNum+"answer2").text(three.replace('*', ''));
    $("#"+qNum+"answer3").text(four.replace('*', ''));
    $("#"+qNum+"answer4").text(five.replace('*', ''));
}

questionRow("1","Q1: What is the capital of Georgia?", "*Atlanta", "San Francisco", "Dallas", "Chicago", "Phoenix");
questionRow("2","Q2: Which of the following is the highest grossing animated movie?", "Toy Story 3", "Finding Nemo", "*Frozen", "Lion King", "Zootopia");
questionRow("3","Q3: Which state has the highest percentage of people who walk to work?", "New York", "Washington", "Nevada", "*Alaska", "Texas");
questionRow("4","Q4: There are one trillion germs that live on what?", "*Human Foot", "Toilet", "Garbage Can", "Fingernails", "Saliva");
questionRow("5","Q5: Most Jell-o contains what?", "MSG", "*Crushed Hooves", "Fruit", "Cane Sugar", "Bits of gummi bears");

//I had to make a click function for each question. There has to be an easier way to do this. I tried making one click function for all form tags that had the id "set"
//but that didn't work.
$("#set1").click(function(){
    if($('input:radio[name=question1]:checked').val() === "1"){
        isChecked1 = true;
        console.log("Yes");
    }
    else{
        isChecked1 = false;
        console.log("No");
    }
});

$("#set2").click(function(){
    if($('input:radio[name=question2]:checked').val() === "1"){
        isChecked2 = true;
        console.log("Yes");
    }
    else{
        isChecked2 = false;
        console.log("No");
    }
});

$("#set3").click(function(){
    if($('input:radio[name=question3]:checked').val() === "1"){
        isChecked3 = true;
        console.log("Yes");
    }
    else{
        isChecked3 = false;
        console.log("No");
    }
});

$("#set4").click(function(){
    if($('input:radio[name=question4]:checked').val() === "1"){
        isChecked4 = true;
        console.log("Yes");
    }
    else{
        isChecked4 = false;
        console.log("No");
    }
});

$("#set5").click(function(){
    if($('input:radio[name=question5]:checked').val() === "1"){
        isChecked5 = true;
        console.log("Yes");
    }
    else{
        isChecked5 = false;
        console.log("No");
    }
});


$(startButton).click(function(){

    $("#head").addClass("hide");
    $(".btn-start").addClass("hide");
    $(".questionBox").removeClass("hide");

    clearInterval(timeStart);
    timeStart = setInterval(countdown, 1000);
    

    function countdown(){
        count--;
        $("#timer").html("<h2>Time Remaining: "+count+"</h2>");

        if(count <= 0){

            if(isChecked1){
                right++;
            }
            if(isChecked2){
                right++;
            }
            if(isChecked3){
                right++;
            }
            if(isChecked4){
                right++;
            }
            if(isChecked5){
                right++;
            }

            wrong = 5 - right;

            $(".questionBox").addClass("hide");
            $("#last").html("<p class='col-md-12'>Right Answers: " + right + "</p>" + 
                            "<p class='col-md-12'>Wrong Answers: " + wrong + "</p>");

            stop();
            clearInterval(timeStart);
            // alert("Time up. Right: " + right + ". Wrong: " + wrong);
        }
    }
    
});