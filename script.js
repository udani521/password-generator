// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
//series of prompts for password criteria (Length of password,At least 8 characters but no more than 128)


function getPasswordOptions() {
  var length;
  while (true) {
    length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters)"));
    if (!isNaN(length) && length >= 8 && length <= 128) {
      break;  
    }
    alert("Please enter a valid length between 8 and 128 characters.");
  }
//to get Character types,Lowercase, Uppercase, Numeric, Special characters ($@%&*, etc)
  var specialCharacters = confirm ("Include Special Characters?");
  var numericCharacters = confirm ("Include Numeric Characters?");
  var lowerCasedCharacters = confirm ("Include Lowercase Characters?");
  var upperCasedCharacters = confirm ("Include Uppercase Characters?");

  if (!specialCharacters && !numericCharacters && !lowerCasedCharacters && !upperCasedCharacters) {
    alert("Please select at least one character type.");    //validate for each input and at least one character type should be selected
    return;
  }
  return {

    length: length,
    lowerCasedCharacters: lowerCasedCharacters,
    upperCasedCharacters: upperCasedCharacters,
    numericCharacters: numericCharacters,
    specialCharacters: specialCharacters
  };
}


function generatePassword() {
  var options = getPasswordOptions();
  if (!options) {
    return; 
  }

  var characterSet = '';
  if (options.lowerCasedCharacters) {
    characterSet += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (options.upperCasedCharacters) {
    characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (options.numericCharacters) {
    characterSet += '0123456789';
  }
  if (options.specialCharacters) {
    characterSet += "@%+\\/'!#$^?:,)(}{][~-_.";
  }
//get random password
  function generatePassword(length, characterSet) {
  var password = '';
  for (var i = 0; i < options.length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }
  return password;
}
//print the generated password
var password = generatePassword(length, characterSet);
  alert("Your Generated Password is: " + password);
  var passwordTextArea = document.getElementById('password');
  passwordTextArea.value = password;
 }
 //Generate a password when the button is clicked
const generate = document.getElementById('generate');
generate.addEventListener('click', generatePassword);



