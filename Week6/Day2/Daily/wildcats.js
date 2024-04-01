// const gameInfo = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
// ];

// function getPlayers(arr) {
//     let newArr = [];
//     arr.forEach(item => {
//         newArr.push(item.username + "!");
//     });
//     return newArr
// };

// console.log(getPlayers(gameInfo));

// function getWinners(arr) {
//     let winners = []
//     arr.forEach(item => {
//         if (item.score > 5) winners.push(item.username)
//     })
//     return winners
// }

// console.log(getWinners(gameInfo));

// function getScore(arr) {
//     let score = []
//     arr.forEach(item => score.push(item.score))
//     return score
// }
// let totalScore = getScore(gameInfo).reduce((total, score) => total + score)

// console.log(totalScore);