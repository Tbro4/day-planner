var today = moment();
var container = $(".container");
var saveBtn = $(".saveBtn");
//displays current day at top of planner
// var displayDate = $("<h2>").text(today.format("MMM Do, YYYY"));
$("#currentDay").append($("<h2>").text(today.format("MMM Do, YYYY")));
// $("#currentDay").text(today.format("MMM Do, YYYY"));
//logs hour of the day (1-24)
var dayHour = today.format("H");
console.log(dayHour);

//we want to append a row for each hour 9am-5pm with the hour(title), memo form(form), and save button(button)

//make an array of hours, loop through the array to append everything?

saveBtn.on("click", function (event) {
  event.preventDefault();

  var memo = $(".memo").val();
  console.log(memo);
});
