player1_name = localStorage.getItem("add_user1");
player2_name = localStorage.getItem("add_user2");

player1_score = "0";
player2_score = "0";
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

 