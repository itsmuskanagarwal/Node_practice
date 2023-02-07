//----------Example 1---------

const EventEmitter = require("events"); //first letter is capital = creating a class.

//creating obj of the class
const event = new EventEmitter();

//fire an event
event.on("Calling", () => {
  console.log("called");
});

// event.emit("Calling"); //it will redirect to Line no: 7

//----------Example 2---------

event.on("Calling", () => {
  console.log("called twice");
});

event.on("Calling", () => {
  console.log("called thrice");
});

event.emit("Calling"); //it will redirect to Line no: 7

//----------Example 3---------

event.on('checkPage', (sc, msg) =>
{
console.log(`Code : ${sc} and page is ${msg}`);
}
)
event.emit("checkPage", 200, 'ok');
