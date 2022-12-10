
// function to check file size
function CheckFileSize(file) {
     var FileSize = file.files[0].size
     FileSize = FileSize / 1024 / 1024;   // size in MB
 
     var FileErr = document.getElementById('FileError');
 
     if (FileSize < 2 && FileSize > 0) {
         FileErr.style.display = "block";
         FileErr.textContent = "*Allowed Size";
         FileErr.style.color = "green";
         FileErr.style.fontSize = "16px";
 
     }
     else {
         FileErr.style.display = "block";
         FileErr.textContent = "*Not Allowed"
         FileErr.style.color = "red";
         FileErr.style.fontSize = "16px";
         
     }
 }



//Password Edits
 var strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{15,})");
 var mediumPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,15})");
 
 function passwordMsg(element, disp, text, textColor ) {
     element.style.display = disp;
     element.textContent = text;
     element.style.color = textColor;
}
function changeElementStyle(element, borderColor) {
     element.style.outline = "none";
     element.style.border = "2px solid " + borderColor;
 
 }

 function checkPassword(passwordElement) {
     var pass = passwordElement.value;
     var displayMsg = document.getElementById('strenghtMsg');
      
     if (pass != "") {
          if (strongPassword.test(pass)) {
               passwordMsg(displayMsg, "block" , "*Strong Password (Recommended)", "green" );
               changeElementStyle(passwordElement, "green")
          }
          else if (mediumPassword.test(pass)) {
               passwordMsg(displayMsg, "block" , "*Meduim Password", "yellow" );
               changeElementStyle(passwordElement, "yellow")
          }
          else {
               passwordMsg(displayMsg, "block" , "*Weak Password", "red" );
               changeElementStyle(passwordElement, "red")
          }
     }
     else {
          passwordMsg(displayMsg, "none" , "", "" );
          passwordElement.style.border = 0;
          passwordElement.style.borderBottom = "1px solid black";

     }


}






// Email Edits 

function checkEmail(emailElement) {
     var emailValue = emailElement.value
     var emailMsg = document.getElementById('emailMsg');
          
     if (emailValue.indexOf('@') == -1) {
          emailMsg.style.display = 'block';
          emailMsg.textContent = '*invalid Email';
          emailMsg.style.fontSize = '16px';
          emailMsg.style.color = 'red';
     }
     else {
          emailMsg.style.display = 'block';
          emailMsg.textContent = '*Valid Email';
          emailMsg.style.fontSize = '16px';
          emailMsg.style.color = 'green';
     }
     if (emailValue == "") {
          emailMsg.style.display = 'block';
          emailMsg.textContent = '*Required';
          emailMsg.style.fontSize = '16px';
          emailMsg.style.color = 'red';
     }
};
function emailAlert(Element, Display, Text, FontSize, Color) {
     Element.style.display = Display;
     Element.textContent = Text;
     Element.style.fontSize = FontSize;
     Element.style.color = Color;
}
function emailsMatch() {
     var email1 = document.getElementById('email1').value;
     var email2 = document.getElementById('email2').value;
     var emailMatching = document.getElementById('emailMatching');
     
     if (email1 !== email2) {
     emailAlert(emailMatching, 'block', '*Emails Don\'t Match', '16px', 'red');
}
else {
     emailAlert(emailMatching, 'block', '*Emails Match', '16px', 'green');
}
     if (email2 == "") {
          emailMatching.style.display = 'none';
     }
}




//Counter Edits
function counterBlocker() {
     var counterElement = document.getElementById('counter');
     var counterMsg = document.getElementById('counterMsg');
     var counterValue = counterElement.value;
     
     if (counterValue != "") {

     if (isNaN(counterValue))
     {
          counterMsg.style.display = "block";
          counterMsg.style.fontSize = "16px"
          counterMsg.style.color = "red";
          counterMsg.textContent = "*Not Allowed Range";    
     }


     if (counterValue.length > 2 || counterValue > 20) {
          counterMsg.style.display = "block";
          counterMsg.style.fontSize = "16px"
          counterMsg.style.color = "red";
          counterMsg.textContent = "*Not Allowed Range";
     }


     else {
          counterMsg.style.display = "block";
          counterMsg.style.fontSize = "16px"
          counterMsg.style.color = "green";
          counterMsg.textContent = "*Allowed Range";
     }
     }
     else {
          counterMsg.style.display = "none";
     }

}


// phoneNumber Edits
function phoneNUM(phoneNumber) {
     var phoneNumberMsg = document.getElementById('phoneP');
     phoneNumberValue = phoneNumber.value;

     
if (phoneNumberValue != ''){
          if (isNaN(phoneNumberValue)) {
          phoneNumberMsg.style.display = 'block';
          phoneNumberMsg.style.fontSize = "16px"
          phoneNumberMsg.style.color = "red";
          phoneNumberMsg.textContent = "*Invalid Phone Number";  
     }
     else {
          phoneNumberMsg.style.display = 'block';
          phoneNumberMsg.style.fontSize = "16px"
          phoneNumberMsg.style.color = "green";
          phoneNumberMsg.textContent = "*Valid Phone Number"; 
     }
}
else {
     phoneNumberMsg.style.display = 'none';
}
}



function formValidator() {
     var email1 = document.getElementById('email1').value;
     var email2 = document.getElementById('email2').value;
     var phoneNumber = document.getElementById('phoneNumber').value;
     var pass = document.getElementById('pass').value;
     var counter = document.getElementById('counter').value;

     if (email1 !== email2
          || email1.indexOf('@') == -1 
          || counter.length > 2 && counter > 20 
          || isNaN(phoneNumber) 
          || !strongPassword.test(pass)
          )
     {
          alert('CHECK YOUR INFO');
          return false;
     }
}