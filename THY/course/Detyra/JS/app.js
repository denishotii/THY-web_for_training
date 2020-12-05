  //Get Elements

  const txtEmail = document.getElementById('input100');
  const txtPassword = document.getElementById('input10');
  const btnLogin = document.getElementById('button10');
  const btnSignUp = document.getElementById('button11');
  const btnLogout = document.getElementById('button12');

  // Ad login event

  btnLogin.addEventListener('click', e => {
    //Get email and password
    e.preventDefault();


    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => window.alert(e.message));
  });
  btnSignUp.addEventListener('click', e => {
    e.preventDefault();
     //Get email and password
     // TODO: CHECK 4 REAL EMAILZ
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise
    .catch(e => window.alert(e.message));
  });

 btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();

 }); 





  //Add a real time listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var user = firebase.auth().currentUser;
        var ifUser = user.emailVerified;
        if (ifUser == true) {
      console.log(firebaseUser);
      $('.modal-content').css({'display':'none'});
      $('.psw').css({'display':'none'});
      $('.user-div').css({'display':'block'});
      setTimeout(function(){
      document.querySelector('#h2-2').style.display = 'none';
      },900000);
      document.getElementById('modal-content').reset();
      var user = firebase.auth().currentUser;
      var email_id = user.email;
      document.getElementById('userId').innerHTML = email_id;
      document.getElementById('modal_trigger').innerHTML = "USER INFO";
      $('.div-4').css({'display':'block'});
      $('.div-5').css({'display':'none'});
      if (user != null) {
        
      }
    }
    else if (ifUser == false) {
       console.log(firebaseUser);
       $('.modal-content').css({'display':'none'});
       $('.psw').css({'display':'none'});
       $('.user-div-1').css({'display':'block'});
        user.sendEmailVerification().then(function() {
          console.log('Emaili u dërgua!!')
          }).catch(function(error) {
          window.alert(error);
          });
        $('.div-4').css({'display':'none'});
        $('.div-5').css({'display':'block'});
     /* function loadref(time) {
        setTimeout("location.reload(true);",time);
      }*/
    }
    } else{
      console.log('not loged in');
      $('.modal-content').css({'display':'block'});
      $('.user-div').css({'display':'none'});
      $('.psw').css({'display':'block'});
      $('.psw-1').css({'display':'none'});
      document.getElementById('modal_trigger').innerHTML = "Login";
      setTimeout(function(){
      document.querySelector('#id01').style.display = 'block';
      },300000);
      $('.div-4').css({'display':'none'});
      $('.div-5').css({'display':'block'});
    }
  });

     /*firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      $('.modal-content').css({'display':'none'});
      $('.psw').css({'display':'none'});
      $('.psw-1').css({'display':'block'});
      $('.user-div').css({'display':'block'});
      setTimeout(function(){
      document.querySelector('#h2-2').style.display = 'none';
      },900000);
      document.getElementById('modal-content').reset();
      var user = firebase.auth().currentUser;
      var email_id = user.email;
      document.getElementById('userId').innerHTML = email_id;
      if (user != null) {
        
      }
    } else{
      console.log('not loged in');
      $('.modal-content').css({'display':'block'});
      $('.user-div').css({'display':'none'});
      $('.psw').css({'display':'block'});
      $('.psw-1').css({'display':'none'});
    }
  });*/