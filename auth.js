// Import MSAL.js configuration
const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID", // Replace with your Azure AD B2C App Registration's client ID
    authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1_sbconnect", // Replace with your user flow's authority
    redirectUri: "https://management.spiritbound.gg", // Replace with the URL Azure AD B2C will redirect to after login
  },
};

const loginRequest = {
  scopes: ["openid", "profile", "email"], // You can customize scopes if needed
};

// Initialize the MSAL.js client
const msalInstance = new msal.PublicClientApplication(msalConfig);

// Handle redirects after login
msalInstance
  .handleRedirectPromise()
  .then((response) => {
    if (response) {
      console.log("Login successful:", response.account);

      // Store the user info in sessionStorage or localStorage if needed
      sessionStorage.setItem("user", JSON.stringify(response.account));

      // Redirect to the dashboard or home page
      window.location.href = "/home.html";
    } else {
      console.log("No response detected. User not logged in yet.");
    }
  })
  .catch((error) => {
    console.error("Login failed:", error);
    const loginMessage = document.getElementById("login-message");
    loginMessage.textContent = "Login failed. Please try again.";
    loginMessage.style.color = "red";
  });

// Sign-in function
function signIn() {
  msalInstance.loginRedirect(loginRequest);
}

// Sign-out function
function signOut() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    msalInstance
      .logoutRedirect({
        account: msalInstance.getAccountByUsername(user.username),
        postLogoutRedirectUri: "https://management.spiritbound.gg",
      })
      .then(() => {
        console.log("Logout successful.");
        sessionStorage.removeItem("user");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  } else {
    console.log("No user is logged in.");
  }
}
