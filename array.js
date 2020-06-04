// // // OBJECTS AND ARRAYS REFERENCE TYPE

// // const number = ["1", "2", "3"];

// // const newNumbers = number;
// // number.push("hello");

// // console.log(newNumbers);

// // let number2 = ["1", "2", "3"];

// // let newNumber2 = number2;
// // newNumber2.push("cat");

// // console.log(newNumber2);

// // MODIFICATIONS ARE ALWAYS GOING TO KEEP REFERNCING THE ORIGINAL
// //

// // const tweet = {
// //   name: "Brayan",
// //   tweets: 20,
// //   age: 23,
// // };

// // const newTweets = tweet;
// // newTweets.name = "mejia";

// // console.log(tweet);

// // CALLBACKS, HIGHER ORDER FUNCTION

// // A HIGHER ORDER FUNCTION IS A FUNCTION THAT TAKES IN ANOTHER FUNCTION AS A PARAMETER

// // const videos = ["whales", "Dolphins", "Tigers", "html"];

// // videos.forEach(function (video) {
// //   console.log(video);
// // });

// // // HIGHER ORDER FUNCTION
// // function repeater(fn) {
// //   fn();
// //   fn();
// //   fn();
// // }

// // function sayHello() {
// //   console.log("Hello There!");
// // }
// // repeater(sayHello);

// // --MAP--
// //note: Creates a copy of one array
// // Always returns a value back. if not a return of undefined

// // const newVideos = videos.map(function (video) {
// //   return video.toUpperCase();
// // });

// // -- FIND --
// // const searchTutorial = videos.find(function (video) {
// //   return video.includes("tiger");
// // });

// // console.log(searchTutorial);

// const videos = ["basics1", "ux", "css", "idiot", "html program", "css"];

// const games = [
//   { title: "Pokemon", rating: 9.5 },
//   { title: "league of legends", rating: 5 },
//   { title: "Sims", rating: 8.5 },
//   { title: "Mario", rating: 10 },
// ];

// const newVideos = videos.map(function (video) {
//   return videos.length < 10 ? video : "nope";
// });
// console.log(newVideo);

// const newVideo = video.map(function (video) {
//   return video.toUpperCase;
// });
// // Find
// const searchTutorial = video.find(function (video) {
//   return video.includes("basics");
// });
// //FILTER
// const shortSearch = video.filter(function (video) {
//   return video.length < 10;
// });

// const shortSearch = video.filter((video) => video.length < 10);

// const highRating = games.filter(function (game) {
//   return game.rating > 9;
// });
// const highRating = games.filter((game) => game.rating > 9);

// const checkRating = games.every((game) => game.rating > 9);

// // const lowRating = games.every(function (game) {
// //   return game.rating 3;

// // });
// // //SOME and EVERY
// console.log(checkRating);

// const newVideos = videos.map(function (video) {
//   return video.length < 10 ? video : "nope";
// });

// const arrowVideos = videos.map((video) => (video.length < 10 ? video : "nope"));

// const arrowVideos = videos.map((video) => video.toUpperCase());

// console.log(arrowVideos);

// sort

// const items = ["Blue", "Green", "Apple", "Navy", "Jelly"];
// const ratings = [93, 24, 53, 36, 32];

// ratings.sort((a, b) => a - b);
// games.sort((a, b) => (a.rating = b.rating));

// console.log(games);

// SPREAD; EXPANDS ELEMENTS IN ARRAYS
const items = ["Blue", "Green", "Apple", "Navy", "Jelly"];
const ratings = [93, 24, 53, 36, 32];

const descendRatings = [...ratings];
descendRatings.sort((a, b) => a - b);
console.log(descendRatings);
