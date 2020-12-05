var firebaseConfig = {
            apiKey: "AIzaSyCcuPeIoh3upV5JsvAYhk4U4bd9h6c2X_M",
            authDomain: "thy-trajnimi.firebaseapp.com",
            databaseURL: "https://thy-trajnimi.firebaseio.com",
            projectId: "thy-trajnimi",
            storageBucket: "thy-trajnimi.appspot.com",
            messagingSenderId: "958391775229",
            appId: "1:958391775229:web:5d3b5050fd71538cd9b394",
            measurementId: "G-1F02JWZ26H"
          };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref('resetPwd');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var email = getInputVal('email');

  // Save message
  saveMessage(email);

  // Show alert
  document.querySelector('.alert').style.display = 'block';
  document.querySelector('.p4').style.display = 'block';
  document.querySelector('.p5').style.display = 'block';
  document.querySelector('.p1').style.display = 'none';
  document.querySelector('.p2').style.display = 'none';
  document.querySelector('.p3').style.display = 'none';
  document.querySelector('#email').style.display = 'none';
  document.querySelector('#button10').style.display = 'none';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email:email
  });
}