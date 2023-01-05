/**
 * Write a function printTime
 * 0 hour - midnight
 * 12 hour - noon
 * 53-7 minute - o'clock
 * 8-23 minute - quarter past
 * 24-37 minute - half past
 * 38-52 minute - quarter to
 * @param{number} hour - 0-24 format, hour of a day
 * @param{number} minute - 0-59 format, minute of a day
 * @returns{string} returns a string representation of a time
 */

const time = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "one",
  14: "two",
  15: "three",
  16: "four",
  17: "five",
  18: "six",
  19: "seven",
  20: "eight",
  21: "nine",
  22: "ten",
  23: "eleven",
};

function printTime(hour, minute) {
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    return `It is not write time`;
  }
  if (minute > 37) ++hour;
  if (minute <= 7 || minute >= 53) {
    minute = "o'clock";
    if (hour === 12) return "noon";
    else if (hour === 0) return "midnight";
    return `${time[hour]} ${minute}`;
  }
  if (minute >= 24 && minute <= 37) minute = "half past";
  else if (minute >= 38 && minute <= 52) minute = "quarter to";
  else if (minute > 7 && minute < 24) minute = "quarter past";

  return `${minute} ${time[hour]}`;
}

// Tests:
console.assert(printTime(9, 0) === "nine o'clock");
console.assert(printTime(9, 15) === "quarter past nine");
console.assert(printTime(9, 30) === "half past nine");
console.assert(printTime(9, 45) === "quarter to ten");
console.assert(printTime(21, 45) === "quarter to ten");
console.assert(printTime(0, 7) === "midnight");
console.assert(printTime(11, 58) === `noon`);
console.assert(printTime(12, 8) === "quarter past twelve");
console.log(printTime(25, 48));
console.log(printTime(9, 0));
console.log(printTime(9, 15));
console.log(printTime(9, 30));
console.log(printTime(9, 45));
console.log(printTime(21, 45));
console.log(printTime(0, 7));
console.log(printTime(11, 58));
console.log(printTime(12, 8));
