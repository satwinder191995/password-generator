// Assignment code here
// generate password function starts here
function generatePassword(){
// initializing variables here
  var length = 0;
var numeric= false;
var lowercase= false;
var upercase= false;
var notNumber=false;
var value = null;
var special= false;
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~\"\'" ;
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var upperChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// validation of length prompt starts here
window.alert("Welcome,to generate a secure password, Please press ok. ");
  while(notNumber === true || length < 8 || length > 128)
    {
      value = window.prompt("Password length required.(8-128 characters)");
      length = parseInt(value);
      var notNumber =isNaN(length);
      if(value !== null)
          {
            if (length < 8)
                {
                  window.alert("Please enter the length of the password above 8 characters")
                }
            else if (length > 128)
                {
                  window.alert("Please enter the length of the password below 128 characters")
                }
            else if (notNumber === true){
                  window.alert("Entered value is empty or not a number. Please enter the number")
                }
            else{
                    while( numeric ===false && lowercase=== false && upercase===false && special===false )
                        {
                          // Series of confirm
                           numeric = window.confirm("Would you like to include numeric values");
                            if (numeric === true){
                                  var result = numbers;
  
                                }
                          lowercase =window.confirm("Would you like to include lowercase characters");
                            if (lowercase === true){
                                   var result = result + lowerChar;
  
                                }
                          upercase = window.confirm("Would you like to include uppercase characters");
                            if (upercase === true){
                                    var result = result + upperChar;
                                }
                          special = window.confirm("Would you like to include special characters");
                            if (special === true){
                                    var result = result + specialChar;
                                }
                            if(numeric ===false && lowercase=== false && upercase===false && special===false )
                                {
                                   window.alert("Please choose atleast 1 charachter type")
                                }
                        }
            }
      }
    else{
          var confirm = window.confirm("Are you sure you want to exit")
          if (confirm === true){
               break;
              }
          else{
              window.alert("Please continue to generate password")
            }

        }
}

// Genrating strong password function starts here
var strongPassword = "";
    for ( var i = 0; i < length; i++ ) {
      strongPassword += result.charAt(Math.floor(Math.random() * result.length));
     }
  return strongPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
