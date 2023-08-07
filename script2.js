// let boxes = document.getElementsByClassName("box");
// let currentplayer = "X"
// for(let i = 0; i<= boxes.length; i++){
//     boxes[i].addEventListener("click",()=>{
//        if(boxes[i].innerHTML === ""){
//         boxes[i].innerHTML = currentplayer;
//        }
//     })
// }
// box = document.querySelectorAll('.boxtext');
// box.addEventListener("click",()=>{
//             console.log("clicked");
//         })



// 
// JavaScript code
// let currentPlayer = "X"; // "X" starts the game
// let boxes = document.getElementsByClassName("box");

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener("click", () => {
//         console.log("clicked");
//         if (boxes[i].textContent == "") {
//             boxes[i].textContent = currentPlayer;
//             // Switch to the other player's turn
           
//         }else{
//             currentPlayer = currentPlayer === "X" ? "O" : "X";
//         }
//     });
// }
let currentPlayer = "X"; // "X" starts the game
let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        console.log("clicked");
        if (boxes[i].textContent === "") {
            boxes[i].textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch to the other player's turn
        }
    });
}
// const winningConditions = [
  
//     [[0, 0], [0, 1], [0, 2]],
//     [[1, 0], [1, 1], [1, 2]],
//     [[2, 0], [2, 1], [2, 2]],
  
//     [[0, 0], [1, 0], [2, 0]],
//     [[0, 1], [1, 1], [2, 1]],
//     [[0, 2], [1, 2], [2, 2]],
 
//     [[0, 0], [1, 1], [2, 2]],
//     [[0, 2], [1, 1], [2, 0]],
// ];


//     for (let row = 0; row < 3; row++) {
//         if (cells[row][0].textContent === currentPlayer &&
//             cells[row][1].textContent === currentPlayer &&
//             cells[row][2].textContent === currentPlayer) {
//           return true;
//         }
//       }
