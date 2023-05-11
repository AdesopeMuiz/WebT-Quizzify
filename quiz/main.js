// Set the date and time of the event
var eventDate = new Date("May 13, 2023 18:00:00").getTime();

// Update the countdown every 1 second
var countdown = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining
  var timeRemaining = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown timer
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("seconds").innerHTML = seconds + "s ";

  // When the countdown is finished
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Event has started!";
  }
}, 1000);


