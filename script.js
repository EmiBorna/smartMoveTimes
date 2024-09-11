"use strict";
let n = 0;
setInterval(function () {
  yourHour();
  NOW("America/Los_Angeles");
  NOW("America/Phoenix");
  NOW("America/Denver");
  NOW("America/Chicago");
  NOW("America/New_York");
}, 1000); // Updates every 1 second

function yourHour() {
  const now = new Date();

  // Get the abbreviated time zone
  const timeZone = new Intl.DateTimeFormat("en-US", { timeZoneName: "short" })
    .formatToParts(now)
    .find((part) => part.type === "timeZoneName").value;

  // Extract hours and minutes
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Format the time as HH:MM AM/PM TimeZone
  const currentTime = `${hours
    .toString()
    .padStart(2, "0")}:${minutes} ${ampm}   ${timeZone}`;
  // Display the time in the desired element
  document.querySelector(".NOW").textContent = currentTime;
}

function NOW(timeZone) {
  // Get the current time
  const now = new Date();

  // Format the date and time for the specified time zone
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour format with AM/PM
  });

  // Format the current date and time
  const timeInTimeZone = formatter.format(now);

  if (timeZone === "America/Los_Angeles") {
    const boxes = document.querySelectorAll(".PDT");
    boxes.forEach((box) => {
      box.textContent = `${timeInTimeZone}   PDT`;
    });
  } else if (timeZone === "America/Phoenix") {
    const boxes = document.querySelectorAll(".MST");
    boxes.forEach((box) => {
      box.textContent = `${timeInTimeZone}   MST`;
    });
  } else if (timeZone === "America/Denver") {
    const boxes = document.querySelectorAll(".MDT");
    boxes.forEach((box) => {
      box.textContent = `${timeInTimeZone}   MDT`;
    });
  } else if (timeZone === "America/Chicago") {
    const boxes = document.querySelectorAll(".CDT");
    boxes.forEach((box) => {
      box.textContent = `${timeInTimeZone}   CDT`;
    });
  } else if (timeZone === "America/New_York") {
    const boxes = document.querySelectorAll(".EDT");
    boxes.forEach((box) => {
      box.textContent = `${timeInTimeZone}   EDT`;
    });
  }
}
