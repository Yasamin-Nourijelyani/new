        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyAeyuRFehSKfK-fY_Cd_auzCHIq6uVcVEo",
          authDomain: "disoveryapp-6e148.firebaseapp.com",
          databaseURL: "https://disoveryapp-6e148-default-rtdb.firebaseio.com",
          projectId: "disoveryapp-6e148",
          storageBucket: "disoveryapp-6e148.appspot.com",
          messagingSenderId: "408140914826",
          appId: "1:408140914826:web:1f2152aa8be73cdb00cd73"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        import {getDatabase, set, get, update, remove, ref, child} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js'

        const db = getDatabase();

        // var enterID = document.querySelector("#enterID");

        
        var stopbtn = document.querySelector("#stopbtn");

        //var seconds = document.querySelector('#seconds');


        function InsertData() {
            set(ref(db, "Tasks/"), {
                ID: "Hello world",
                //seconds: seconds.value, //check if this is a string
                
            })
            .then(()=> {
                alert("Data added successfuly!")
            })
            .catch((error)=>{
                alert(error)
            });

        }

       
    
        stopbtn.addEventListener('click', InsertData);
        








