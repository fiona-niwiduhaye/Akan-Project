// Function to refresh the form after submition
function formRefresh(){
  document.getElementById("form_data").reset();
}
dateOfBirth = document.getElementById("date").value
gender = document.getElementById("gender").value

dateOfBirth = new Date(dateOfBirth);

var day=parseInt(dateOfBirth.getFullYear());
var month=parseInt(dateOfBirth.getMonth());
var year=parseInt(dateOfBirth.getDate());

    //Centuary calculation
    var centry=(year-1)/100+1; 
    var dayOfTheWeek = ( centry/4 -2*centry-1 + 5*year/4  + 26*(month+1)/10 + day ) % 7;

     dayOfTheWeek = parseInt(dayOfTheWeek);  
     var akanName;

     femaleAkanNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];
     maleAkanNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
     var bornDay;

     if (dayOfTheWeek == 0 && gender == "female") {
      bornDay = "Saturday";
      akanName = femaleAkanNames[0];
  } 
  else if (dayOfTheWeek == 0 && gender == "male") {
      bornDay = "Saturday";
      akanName = maleAkanNames[0];


  }
   else if (dayOfTheWeek == 1 && gender == "female") {
      bornDay = "Sunday";
      akanName = femaleAkanNames[1];
  } 
  else if (dayOfTheWeek == 1 && gender == "male") {
      bornDay = "Sunday";
      akanName = maleAkanNames[1];


  } 
  else if (dayOfTheWeek == 2 && gender == "female") {
      bornDay = "Monday";
      akanName = femaleAkanNames[2];
  } 
  else if (dayOfTheWeek == 2 && gender == "male") {
      bornDay = "Monday";
      akanName = maleAkanNames[2];


  } 
  else if (dayOfTheWeek == 3 && gender == "female") {
      bornDay = "Tuesday";
      akanName = femaleAkanNames[3];
  } 
  else if (dayOfTheWeek == 3 && gender == "male") {
      bornDay = "Tuesday";
      akanName = maleAkanNames[3];


  } 
  else if (dayOfTheWeek == 4 && gender == "female") {
      bornDay = "Wednesday";
      akanName = femaleAkanNames[4];
  } 
  else if (dayOfTheWeek == 4 && gender == "male") {
      bornDay = "Wednesday";
      akanName = maleAkanNames[4];


  } 
  else if (dayOfTheWeek == 5 && gender == "female") {
      bornDay = "Thursday";
      akanName = femaleAkanNames[5];
  }
   else if (dayOfTheWeek == 5 && gender == "male") {
      bornDay = "Thursday";
      akanName = maleAkanNames[5];


  }
   else if (dayOfTheWeek == 6 && gender == "female") {
      bornDay = "Friday";
      akanName = femaleAkanNames[6];
  } 
  else if (dayOfTheWeek == 6 && gender == "male") {
      bornDay = "Friday";
      akanName = maleAkanNames[6];
  }