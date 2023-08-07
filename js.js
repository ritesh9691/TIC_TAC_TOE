// function getCheese() {

//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const cheese = "🧀🧀";

//             resolve(cheese);
//         }, 2000)
//     });
// }

// function getDough(cheese) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const dough = cheese + "🍩";
//             resolve(dough);
//         }, 2000)
//     })
// }
// function getPizza(dough) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const pizza = dough + "🍕";
//              resolve(pizza);
//         }, 2000)
//     })
// }
// async function recipe() {
//     try {
//         const cheese = await getCheese();
//         console.log("here is the cheese" + cheese);
//         const dough = await getDough();
//         console.log("here is the dough" + cheese);
//         const pizza = await getPizza();
//         console.log("here is the pizza" + cheese);
//     }
//     catch (err) {
//         console.log("something went wrong", err);
//     }

// }
// recipe();
// const mydoc = document.body;
// console.log(mydoc)
// const box = document.getElementById("box-2");
// console.log(box)
// INPUT FROM THE USER TO
// const boxes = document.getElementsByClassName("boxtext");
// for(let i = 0; i<= boxes.length; i++){
//     boxes[i].innerHTML = "O"
// };
// const items = ["X","O"];
// function myfunction(items){
//     console.log("not working");
//     for(let i = 0; i < items; i++){
//         if(boxes[i] === "X"){
//             boxes[i].innerHTML = "O"
//         }else{
//             boxes[i].innerHTML = "X"
//         }
//     }
// }

// myfunction(items);
// event listner to box text
document