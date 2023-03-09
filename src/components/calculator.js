const FOOTBALL_FIELD_LENGTH = 105; // in meters

const Calculator = (inputVal, unit) => {
  if(!inputVal) {
    inputVal = 0;
  };

  if(!unit) {
    unit = "m";
  };

  let inputValInMeters = 0;
  if (unit === "km") {
    inputValInMeters = inputVal * 1000;
  }
  if (unit === "m") {
    inputValInMeters = inputVal;
  }
  if (unit === "cm") {
    inputValInMeters = inputVal / 100;
  }
  if (unit === "mm") {
    inputValInMeters = inputVal / 1000;
  }
  if (unit === "nm") {
    inputValInMeters = inputVal / 1000000000;
  }
  if (unit === "micrometer") {
    inputValInMeters = inputVal / 1000000;
  }
  if (unit === "pm") {
    inputValInMeters = inputVal / 1000000000000;
  }
  if (unit === "ft") {
    inputValInMeters = inputVal / 3.28084;
  }
  if (unit === "in") {
    inputValInMeters = inputVal / 39.3701;
  }
  if (unit === "yd") {
    inputValInMeters = inputVal / 1.09361;
  }
  if (unit === "mi") {
    inputValInMeters = inputVal / 0.000621371;
  }
  if (unit === "ly") {
    inputValInMeters = inputVal / 0.0000000000001057;
  }
  return inputValInMeters / FOOTBALL_FIELD_LENGTH;
}

export default Calculator;