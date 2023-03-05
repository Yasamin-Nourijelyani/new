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
        var loginbtn = document.querySelector('#login');
        // the ID for the task and student for which we are saving to the database. this value must be unique
        // Will be implemented to authenticate users in the future
        var enterEmail = document.querySelector("#enterEmail");
        var enterPass = document.querySelector("#enterPass");


        //if the user presses start and stop, the start and stop times will be recorded
        loginbtn.addEventListener('click', goToUser);
        stopbtn.addEventListener('click', saveEndTime);

        
        function saveStartTime() {
            set(ref(db, "Tasks/" + enterID.value), {
                StartTime: Date.now(),
                EndTime: Date.now(),
                                
            })
            .then(()=> {
                alert("Data added successfuly!");
            })
            .catch((error)=>{
                alert(error);
            });

        }

        function saveEndTime() {
            //enterID will be the task ID later on when we have more tasks
            update(ref(db, "Tasks/" + enterID.value), {
                EndTime: Date.now(),
                
                //seconds: seconds.value.toString(), //check if this is a string
                
            })
            .then(()=> {
                alert("Data updated successfuly!");
            })
            .catch((error)=>{
                alert(error);
            });

        }





       









