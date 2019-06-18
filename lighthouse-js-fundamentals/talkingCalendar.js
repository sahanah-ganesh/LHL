let talkingCalendar = function(date) {
  let array = date.split("/");
  var year = array[0];
  var day = array[2];
  var month = Number(array[1]);

  switch (month) {
    case 01:
      month = "January";
      break;
    case 02:
      month = "February";
      break;
    case 03:
      month = "March";
      break;
    case 04:
      month = "April";
      break;
    case 05:
      month = "May";
      break;
    case 06:
      month = "June";
      break;
    case 07:
      month = "July";
      break;
    case 08:
      month = "August";
      break;
    case 09:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }

  if (day[0] == 0) {
    day = day[1];
  }

  if (day == 01 || day == 21 || day == 31) {
    day += "st, ";
  } else if (day == 02 || day == 22) {
    day += "nd, ";
  } else if (day == 03 || day == 23) {
    day += "rd, ";
  } else {
    day += "th, ";
  }

  console.log(month + " " + day + year);
};


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));