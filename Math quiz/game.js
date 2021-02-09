var player1_name = localStorage.getItem("player1name");
var player2_name = localStorage.getItem("player2name");
var question_turn = "player1";
var answer_turn = "player2";
var get_answer;
var player1_score=0;
var player2_score=0;


function display(){
    console.log(player1_name);
    console.log(player2_name);
    document.getElementById("player1score").innerHTML = player1_name + ": 0" 
    document.getElementById("player2score").innerHTML = player2_name + ": 0"
}
function send(){
    var number1 = document.getElementById("number_1").value;
    var number2 = document.getElementById("number_2").value;
    var answer = parseInt(number1) * parseInt(number2);
    localStorage.setItem("answer", answer);
    answer_box = `
    <h3>What Is</h3>
    <br>
    <h5>${number1} X ${number2}?</h5>
    <h3>Answer Goes Here!</h3>
    <br>
    <input class="form-control" id="user_answer" placeHolder="Enter The Answer Here">
    <br>
    <button class="btn btn-info id="check_button" style="display:block;" onclick="check()">Check Answer Here!</button>
    `;
    document.getElementById("answer_box").innerHTML = answer_box;
    
}

function check(){
    get_answer = document.getElementById("user_answer").value;
    answer = localStorage.getItem("answer");
    console.log(answer);
    if (get_answer == answer){
        if(answer_turn == "player1"){
            player1_score++;
            document.getElementById("player1score").innerHTML = player1_name + ": " +player1_score;
        }
        else{
            player2_score++;
            document.getElementById("player2score").innerHTML = player2_name + ": " +player2_score;
        }
        if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("question_player").innerHTML = "Question Turn" + question_turn;
         }
        else{
        question_turn = "player2";
        document.getElementById("question_player").innerHTML = "Question Turn" + question_turn;
        }
    }
    else
    {
       if(answer_turn == "player1")
       {
        player1_score--;
        document.getElementById("player1score").innerHTML = player1_name + ": " +player1_score;
        }
    else{
        player2_score--;
        document.getElementById("player2score").innerHTML = player2_name + ": " + player2_score;
    }
    }
    }   