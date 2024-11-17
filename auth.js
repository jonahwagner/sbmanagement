const msalInstance = new msal.PublicClientApplication(msalConfig);

function signIn() {
  msalInstance.loginPopup(loginRequest)
    .then((loginResponse) => {
      console.log("Login successful:", loginResponse);

      // Redirect to home.html after login
      window.location.href = "home.html";
    })
    .catch((error) => {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    });
}

// Check for a valid session or tokens in cache
function checkAccount() {
  const accounts = msalInstance.getAllAccounts();
  if (accounts && accounts.length > 0) {
    console.log("User is already logged in:", accounts[0]);
    window.location.href = "home.html"; // Redirect to home.html if logged in
  }
}

// Automatically check account on page load
window.onload = checkAccount;
