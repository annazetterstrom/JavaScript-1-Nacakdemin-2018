
let elUser = document.getElementById('username');
let elPass = document.getElementById('password');
let elMsgPass = document.getElementById('feedbackPass'); // det är bättre att lägga dessa här ist för i funktionen
let elMsgUser = document.getElementById('feedbackUser');

// Koppla events till olika funktioner
elUser.oninput = checkUsername; // oninput kollar medans du skriver. Viktigt att välja rätt event
elPass.oninput = checkPassword; 

// Ändra färg på medelandet 
elMsgUser.style.color = 'red';
elMsgPass.style.color = 'red';

function checkUsername(){
   if(elUser.value.length < 5) // OBS! inte innerHTML när man använder input
    elMsgUser.innerHTML = 'Användarnamnet måste bestå av minst fem tecken, tack!'; 
     //Detta kallas validering, validerar formuläret
   else
       elMsg.innerHTML = '';

}

// Ternary-operator istället för if...else
function checkPassword(){
   elMsgPass.innerHTML = elPass.value.length < 8 ? 'Användarnamnet måste bestå av minst fem tecken, tack!' : ''; 
   
   
}

