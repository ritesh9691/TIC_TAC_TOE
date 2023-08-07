//accessing the box and the result text *********

const cells = document.querySelectorAll(".box");
const result_text = document.querySelector(".gameinfo h1");

//player adding******************

const playerX = "X";
const playerO = "O";
let toggle = true;

// for changing the player***********************

cells.forEach((cell) => {
  cell.onclick = () => {
    cell.classList.add("pointer-disabled");
    let currentPlayer = toggle ? playerX : playerO;
    cell.innerHTML = currentPlayer;
    toggle = !toggle;
    // swap(currentPlayer);
    if (winner(currentPlayer)) {
      result_text.textContent = "The winner is player " + currentPlayer;
    }else {
        if (isdraw()) {
            result_text.textContent = "It\s a draw"
        }
    }
   
  };
});


//to swap the player chance text*********************
function swap(currentPlayer){

    if(currentPlayer == playerX){
        turn_change.classList.add(".active");
       
        turn_changed.classList.remove(".active")
        console.log(currentPlayer);
    }else{
        turn_changed.classList.add(".active");
        
        console.log(currentPlayer);
    }
}

//some condition to win the game**********************
const winning_condition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

//winner functionality********************************

function winner(currentPlayer) {
  return winning_condition.some((condition) => {
    return condition.every((index) => {
      return cells[index].textContent === currentPlayer;
    });
  });
}
// draw game function**********************************

function isdraw(){
   return [...cells].every(cell=>{
        return cell.textContent !== "";
    });
};

//reset the game option********************************
const reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", reset);

function reset(){
    [...cells].forEach(cell=>{
        cell.textContent = "";
        cell.classList.remove("pointer-disabled");
toggle =true;
result_text.innerHTML = "You Can Win This"
    })
}


