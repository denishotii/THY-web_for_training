 				  var uploader = document.getElementById('uploader');
				  var fileButton = document.getElementById('fileButton');

				  //Listen for file selection 
				  fileButton.addEventListener('change', function(e) {
				  	// Get File
				  	var file = e.target.files[0];

				  	// Create storage ref
				  	var user = firebase.auth().currentUser;
      				var email_id = user.email;
				  	var storageRef = firebase.storage().ref("Detyra-1" + '/' + email_id + '/' + file.name);

				  	// Upload file
				  		var task = storageRef.put(file);

				  	// Update progress bar
				  	task.on('state_changed', 

				  		function progress(snapshot) {
				  			var percentage = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
				  			uploader.value = percentage;
				  			
				  		},

				  		function error(err) {
				  			alert(err);
				  		},

				  		function complete() {
				  			window.alert("File Sent :)");
				  			document.querySelector('#alert-1').style.display = 'none';
				  			document.querySelector('#alert-2').style.display = 'block';
				  			setTimeout(function(){
						      document.querySelector('#alert-1').style.display = 'block';
						      document.querySelector('#alert-2').style.display = 'none';
						      },60000);
				  		}

				  		);
				  });