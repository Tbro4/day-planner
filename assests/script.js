$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#1").val(localStorage.getItem("1"));
$("#2").val(localStorage.getItem("2"));
$("#3").val(localStorage.getItem("3"));
$("#4").val(localStorage.getItem("4"));
$("#5").val(localStorage.getItem("5"));

var today = moment();
var container = $(".container");
var saveBtn = $(".saveBtn");
//displays current day at top of planner
$("#currentDay").append($("<h2>").text(today.format("MMM Do, YYYY")));
//logs hour of the day (1-24)
var dayHour = parseInt(today.format("H"));

//an array to hold input values for each hour
var textFieldInputs = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

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

saveBtn.on("click", function (event) {
  // event.preventDefault();
  //this is the button element
  var key = $(this).attr("id");
  var input = $(this).siblings().eq(1).val();
  localStorage.setItem(key, input);
  console.log($(this).siblings().eq(1).val());
});
