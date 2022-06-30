
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyAyL0CAKQAI2piUKAazl_RzW53HWg8n01Y",
authDomain: "jura-fe60e.firebaseapp.com",
projectId: "jura-fe60e",
storageBucket: "jura-fe60e.appspot.com",
messagingSenderId: "130194041849",
appId: "1:130194041849:web:875a6dc14c192772232b28",
measurementId: "G-Q7TS9P27KZ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);


document.getElementById('newRequest').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('floatingName');
    var email = getInputVal('floatingEmail');
    var phone = getInputVal('floatingNumber');
    var urgency = getInputVal('floatingUrgency');
    var category = getInputVal('floatingSelect');
    var filesUploaded = getInputVal('formFile');
    // var filesUploaded = "filler"
    var description = getInputVal('floatingTextarea');

  
    // Save message
    saveMessage(name, email, phone, urgency, category, filesUploaded, description);
  
    // Show alert
    alert("Your case have been successfully uploaded.");
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase

  async function saveMessage(name, email, phone, urgency, category, filesUploaded, description){
    try {
        const docRef = await addDoc(collection(db, "Submitted cases"), {
            SubmissionDate:Date().toString(),
            name: name,
            email:email,
            phone:phone,
            urgency:urgency,
            category:category,
            filesUploaded:filesUploaded,
            description:description
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }
