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
     