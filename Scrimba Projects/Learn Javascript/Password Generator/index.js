const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
  "`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let paragraphEl = document.getElementById("paragraph-el")
let paragraphEl2 = document.getElementById("paragraph-el2")

function generatePasswords() {
  let password1 = ""
  let password2 = ""

  for (let i = 0; i < 15; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length); 
    let randomIndex2 = Math.floor(Math.random() * characters.length); 
    
    password1 += characters[randomIndex1];
    password2 += characters[randomIndex2];
  }

  
  paragraphEl.textContent = password1;
  paragraphEl2.textContent = password2;
}

