const msalConfig = {
  auth: {
    clientId: "26e0f56c-0f41-4f2e-836d-bc317bbbcb6a", // Replace with your app's Client ID
    authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1_sbconnect", // User flow endpoint
    redirectUri: "https://management.spiritbound.gg", // Ensure this matches the Azure AD B2C app registration
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

async function signIn() {
  try {
    const loginResponse = await msalInstance.loginRedirect({
      scopes: ["openid", "profile", "email"],
    });
    console.log("Login successful:", loginResponse);

    // Redirect to home page after successful login
    window.location.href = "home.html";
  } catch (error) {
    console.error("Login failed:", error);
  }
}

async function handleRedirect() {
  const redirectResponse = await msalInstance.handleRedirectPromise();
  if (redirectResponse) {
    console.log("Redirect response received:", redirectResponse);

    // Redirect to home page after successful login
    window.location.href = "home.html";
  } else {
    console.log("No redirect response received");
  }
}

// Handle redirect responses when the page loads
handleRedirect();
