// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(){
   //Function call for geting the length of password
   var length=getPassLength();
   length=parseInt(length);
   //Function call for getting the characters
   var char =getChar();

   var upper = char.upper;
   //If users prefers to add upper case then update upper
   // from true to list of uppercase letters
   if(upper){
     upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }
   else{
    //otherwise its empty
     upper="";
   }
   var lower = char.lower;
   //If users prefers to add lower case then update lower
   // from true to list of lowercase letters
   if(lower){
    lower="abcdefghijklmnopqrstuvwxyz";
  }
  else{
    //otherwise its empty
    lower="";
  }
 
   var number= char.number;
   //If users prefers to add numbers then update number 
   //from true to list of numbers
  if(number){
    number="0123456789";
  }
  else{
    //otherwise its empty
    number="";
  }

   var splChar = char.splChar;
   //If users prefers to add specisl characters then update
   // splChar from true to special characters
   if(splChar){
    splChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
   }else{
    splChar ="";
   }
   //concatinate all possible characters to form a charset 
   var charset =upper+lower+number+splChar;
   var retVal = "";
   var n = charset.length; 
  for (var i = 0;i < length; ++i) {
    //(generate a random number from 0 to 1)and 
    //multiply with the length of chaset to get 
   retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;

}

function getPassLength(){
 // Alert to obtain length of the password
 var password_length = prompt("Password Length",15);

 // Convert the password from string to integer with the built-in method
 password_length = parseInt(password_length); 

 // Check if the password length entered is greater than  
 //or equal to 8 and less than or equal to 128 characters
 while(password_length < 8 || password_length > 128){
   alert("Password length should be greater than 8 and less than 128");
   password_length = prompt("Password Length again",15);
   password_length = parseInt(password_length); 
 }
 return password_length;
}

var getChar= function(){
  //Confirm whether or not to include uppercase letters
  var upper=confirm("Include Uppercase Characters");
  upper =Boolean(upper);
  //Confirm whether or not to include lowercase letters
  var lower=confirm("Include Lowercase Characters");
  lower=Boolean(lower);
  //Confirm whether or not to include Numbers
  var number=confirm("Include Numbers");
  number =Boolean(number);
  //Confirm whether or not to include special characters
  var splChar=confirm("Include Special Characters");
  splChar=Boolean(splChar);
  //Check for including atleast one character
  if(!(lower || upper || number || splChar)){
    alert("Atleast one character type should be selected");
    char=getChar();
  }
  //return an object of possible characters 

  return{
    upper,
    lower,
    number,
    splChar
  };
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
