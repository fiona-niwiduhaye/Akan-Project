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