// Function to refresh the form after submition
function formRefresh(){
  document.getElementById("form_data").reset();
}
dateOfBirth = document.getElementById("date").value
gender = document.getElementById("gender").value

dateOfBirth = new Date(dateOfBirth);