//vowel consonant program
let letter = prompt("Enter a letter : ");
letter = letter.toLocaleLowerCase();

//Checking vowel
if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
) {
  alert(`Letter is Vowel: ${letter}`);
}
//Checking consonant
else if (
  letter === "b" ||
  letter === "c" ||
  letter === "d" ||
  letter === "f" ||
  letter === "g" ||
  letter === "h" ||
  letter === "j" ||
  letter === "k" ||
  letter === "l" ||
  letter === "m" ||
  letter === "n" ||
  letter === "p" ||
  letter === "q" ||
  letter === "r" ||
  letter === "s" ||
  letter === "t" ||
  letter === "v" ||
  letter === "w" ||
  letter === "x" ||
  letter === "y" ||
  letter === "z"
) {
  alert(`Letter is Consonant: ${letter}`);
} 

//Checking not a letter
else {
  alert(`Not a Letter: ${letter}`);
}
