var today = moment();
var container = $(".container");
var saveBtn = $(".saveBtn");
//displays current day at top of planner
$("#currentDay").append($("<h2>").text(today.format("MMM Do, YYYY")));
//logs hour of the day (1-24)
var dayHour = parseInt(today.format("H"));
console.log(dayHour);

//function to change background color
function qSelector() {
  //list of all inputs with class of memo
  var x = $(".memo");

  //loops through the list to change background color
  for (var i = 0; i < x.length; i++) {
    //grabs data-hour attribute
    var hour = parseInt($(x[i]).attr("data-hour"));

    //x[i] is the input element
    //used parseInt on both variables to fix bug
    if (hour < dayHour) {
      x[i].classList.add("past");
    } else if (hour === dayHour) {
      x[i].classList.add("present");
    } else {
      x[i].classList.add("future");
    }
  }
}
qSelector();

//we want to append a row for each hour 9am-5pm with the hour(title), memo form(form), and save button(button)

//make an array of hours, loop through the array to append everything?

saveBtn.on("click", function (event) {
  event.preventDefault();
  //this is the button element
  console.log($(this));
  var input = $(this).siblings().eq(1).val();
  localStorage.setItem("memo", input);
  console.log($(this).siblings().eq(1).val());
});
