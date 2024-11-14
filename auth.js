// Function to initiate login
function signIn() {
    msalInstance.loginRedirect(loginRequest);
  }
  
  // Handle the redirect after login
  msalInstance.handleRedirectPromise()
    .then(response => {
      if (response) {
        console.log("User logged in:", response);
        document.getElementById("login-message").innerText = `Welcome, ${response.account.username}!`;
      }
    })
    .catch(error => {
      console.error("Login error:", error);
    });
  