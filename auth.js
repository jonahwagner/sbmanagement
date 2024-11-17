// Ensure msalConfig is imported before initializing msalInstance
const msalInstance = new msal.PublicClientApplication(msalConfig);

function signIn() {
  msalInstance.loginPopup(loginRequest)
    .then((loginResponse) => {
      console.log("Login successful:", loginResponse);
      window.location.href = "home.html";
    })
    .catch((error) => {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    });
}

window.onload = () => {
  if (msalInstance.getAllAccounts().length > 0) {
    window.location.href = "home.html";
  }
};
