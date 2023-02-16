/* code from: https://github.com/Vetrivel-VP/contact_form_firebase/blob/master/index.html  */

const firebaseConfig = {
    apiKey: "AIzaSyAeyuRFehSKfK-fY_Cd_auzCHIq6uVcVEo",
    authDomain: "disoveryapp-6e148.firebaseapp.com",
    databaseURL: "https://disoveryapp-6e148-default-rtdb.firebaseio.com",
    projectId: "disoveryapp-6e148",
    storageBucket: "disoveryapp-6e148.appspot.com",
    messagingSenderId: "408140914826",
    appId: "1:408140914826:web:1f2152aa8be73cdb00cd73"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };