/*
*Javascript Simple 2 Player Tic Tac Toe
*
*Author: Jacob Gaughan
*/

//set box variables
var box1 = document.getElementById("box1"),
		box2 = document.getElementById("box2"),
		box3 = document.getElementById("box3"),
		box4 = document.getElementById("box4"),
		box5 = document.getElementById("box5"),
		box6 = document.getElementById("box6"),
		box7 = document.getElementById("box7"),
		box8 = document.getElementById("box8"),
		box9 = document.getElementById("box9");

//variable for whos current player
var turn = document.getElementById("turn");

//new game => no moves
var moves = 0;

//resets gameboard
document.getElementById("myBtn").addEventListener("click", function(){
	for(var i = 0; i < boxes.length; i++){
		boxes[i].innerHTML = "";
		turn.innerHTML = "Begin!";
		boxes[i].style.background = "#bae8ae";
	}
		moves = 0;
});

	var	boxes = document.querySelectorAll("#main div"), currentPlayer = 0;

//displays winning message
function selectWinnerBoxes(b1,b2,b3){
		turn.innerHTML = "Player " + b1.innerHTML + " Won";
		b1.style.background = "#87db42";
		b2.style.background = "#87db42";
		b3.style.background = "#87db42";
}


function getWinner(){

// get all posibilites of winners
	if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
		 selectWinnerBoxes(box1,box2,box3);

	else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
		 selectWinnerBoxes(box4,box5,box6);

	else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
		 selectWinnerBoxes(box7,box8,box9);

	else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
		 selectWinnerBoxes(box1,box4,box7);

	else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
		 selectWinnerBoxes(box2,box5,box8);

	else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
		 selectWinnerBoxes(box3,box6,box9);

	else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
		 selectWinnerBoxes(box1,box5,box9);

	else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
		 selectWinnerBoxes(box3,box5,box7);

//all boxes filled with no winner = draw
 	else if(moves == 8)
		turn.innerHTML = "It's a draw!";

}


// set event to mark box on click
for(var i = 0; i < boxes.length; i++){
		boxes[i].addEventListener("click", function(){
				if(this.innerHTML !== "X" && this.innerHTML !== "O"){
				if(currentPlayer%2 === 0){
					 this.innerHTML = "X";
					 turn.innerHTML = "Player O's turn";
					 getWinner();
					 currentPlayer += 1;
					 moves += 1;

				}else{
					 this.innerHTML = "O";
					 turn.innerHTML = "Player X's turn";
					 getWinner();
					 currentPlayer += 1;
					 moves +=1;
				}
		}
	});
}
