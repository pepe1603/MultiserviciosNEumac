function onSignIn(googleUser) {
    // Get the Google account ID token
    var id_token = googleUser.getAuthResponse().id_token;
  
    // Send the token to your backend for verification
    // ...
  
    // Redirect the user to their Google account
    window.location.href = "https://myaccount.google.com/";
  }
  