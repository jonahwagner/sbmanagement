function signIn() {
    msalInstance.loginPopup(loginRequest)
      .then(response => {
        console.log("User logged in:", response);
        showUserProfile(response.account);
        document.getElementById("loginButton").style.display = "none";
        document.getElementById("logoutButton").style.display = "block";
        document.getElementById("message").innerText = `Welcome, ${response.account.username}!`;
      })
      .catch(error => {
        console.error("Login failed:", error);
      });
  }
  
  function signOut() {
    msalInstance.logoutPopup()
      .then(() => {
        document.getElementById("loginButton").style.display = "block";
        document.getElementById("logoutButton").style.display = "none";
        document.getElementById("message").innerText = "You have been logged out.";
      })
      .catch(error => {
        console.error("Logout failed:", error);
      });
  }
  
  function showUserProfile(account) {
    document.getElementById("message").innerText = `Hello, ${account.username}`;
  }
  