function formRefresh() {
  document.getElementById("form_data").reset();
}


var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

dateOfBirth = document.getElementById("date").value

dateOfBirth = new Date(dateOfBirth);

var day = dateOfBirth.getFullYear();
var month = dateOfBirth.getMonth();
var year = dateOfBirth.getDate();


//Centuary calculation
var centry = (year - 1) / 100 + 1;
var dayOfTheWeek = (centry / 4 - 2 * centry - 1 + 5 * year / 4 + 26 * (month + 1) / 10 + day) % 7;
dayOfTheWeek = Math.round(dayOfTheWeek);



function getGender() {
  var genders = document.getElementsById("gender");
  if (genders[0].checked == true) {
    var gender = "male";
  }
  else if (genders[1].checked == true) {
    var gender = "female";
  }
  else {
    return false;
  }

  switch (gender) {
    case "male":
      if (dayOfTheWeek == 1) {
        alert("You were born on " + dayNames[0] + " and Your akan name is " + maleNames[0] + "!");
      }
      else if (dayOfTheWeek == 2) {
        alert("You were born on " + dayNames[1] + " and Your akan name is " + maleNames[1] + "!");
      }
      else if (dayOfTheWeek == 3) {
        alert("You were born on " + dayNames[2] + " and Your akan name is " + maleNames[2] + "!");
      }
      else if (dayOfTheWeek == 4) {
        alert("You were born on " + dayNames[3] + " and Your akan name is " + maleNames[3] + "!");
      }
      else if (dayOfTheWeek == 5) {
        alert("You were born on " + dayNames[4] + " and Your akan name is " + maleNames[4] + "!");
      }
      else if (dayOfTheWeek == 6) {
        alert("You were born on " + dayNames[5] + " and Your akan name is " + maleNames[5] + "!");
      }
      else if (dayOfTheWeek == 0) {
        alert("You were born on " + dayNames[6] + " and Your akan name is " + maleNames[6] + "!");
      }
      break;
    case "female":
      if (dayOfTheWeek == 1) {
        alert("You were born on " + dayNames[6] + " and Your akan name is  " + femaleNames[0] + "!");
      }
      else if (dayOfTheWeek == 2) {
        alert("You were born on " + dayNames[5] + " and Your akan name is " + femaleNames[1] + "!");
      }
      else if (dayOfTheWeek == 3) {
        alert("You were born on " + dayNames[4] + " and Your akan name is " + femaleNames[2] + "!");
      }
      else if (dayOfTheWeek == 4) {
        alert("You were born on " + dayNames[3] + " and Your akan name is " + femaleNames[3] + "!");
      }
      else if (dayOfTheWeek == 5) {
        alert("You were born on " + dayNames[2] + " and Your akan name is " + femaleNames[4] + "!");
      }
      else if (dayOfTheWeek == 6) {
        alert("You were born on " + dayNames[1] + " and Your akan name is " + femaleNames[5] + "!");
      } else if (dayOfTheWeek == 0) {
        alert("You were born on " + dayNames[0] + " and Your akan name is " + femaleNames[6] + "!");
      }
      break
    default:

  }
}
function akanNames() {
  dayOfTheWeek = calculateDayOfTheWeek();
  getGender();
}
//call to the reFresh function
formRefresh();