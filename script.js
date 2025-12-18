//your JS code here. If required.
function daysOfAYear(year) {
  // Leap year rules
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  }
  return 365;
}

// Example usage (you can remove if not needed)
let year = prompt("Enter a year:");
alert(daysOfAYear(Number(year)));
