// slider set

const slider=document.getElementById("slider");
const lengthnumber=document.getElementById("lengthnumber");

lengthnumber.textContent=slider.value;

slider.addEventListener("input", () => {

   lengthnumber.textContent = slider.value;

});


//checkbox selection 

const uper=document.getElementById("uppercase");
const lower=document.getElementById("lowercase");
const number=document.getElementById("numbers");
const symbol=document.getElementById("symbol");

//password Data

const Uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase="abcdefghijklmnopqrstuvwxyz";
const Numberlist="1234567890";
const Symbol="!@#$%^&*()";

//password generation

const button=document.getElementById("button");

const Password=document.getElementById("password");

const strength=document.getElementById("circle");
button.addEventListener("click",()=>{

   let characters = "";
   let generatedPassword = "";
   let score=0;

   if(uper.checked){
      score++;
      characters += Uppercase;
   }

   if(lower.checked){
      score++;
      characters += Lowercase;
   }

   if(number.checked){
      score++;
      characters += Numberlist;
   }

   if(symbol.checked){
      score++;
      characters += Symbol;
   }

   if(characters === ""){
      alert("Select at least one checkbox");
      return;
   }


   for(let i=0; i<slider.value; i++){

      let randomIndex = Math.floor(
         Math.random() * characters.length
      );

      generatedPassword += characters[randomIndex];

   }

   Password.value=generatedPassword;

   const passwordlength=Number(slider.value);

   if(score>2 && passwordlength>=6){
      strength.style.backgroundColor="green";

   }

   else if(score>2 && passwordlength<6){
      strength.style.backgroundColor="orange";

   }

   else{
      strength.style.backgroundColor="red";
   }   

})

//copy content

const copy=document.getElementById("copy");
copy.addEventListener("click",()=>{
   if(Password.value === ""){
      return;
   }

   navigator.clipboard.writeText(Password.value);

   alert("Password Copied To ClipBoard")

})









