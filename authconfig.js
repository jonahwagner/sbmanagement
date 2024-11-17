const msalConfig = {
  auth: {
    clientId: "26e0f56c-0f41-4f2e-836d-bc317bbbcb6a", // Replace with your App Registration Client ID
    authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1_sbconnect", // Your Azure AD B2C Authority URL
    knownAuthorities: ["spiritbc.b2clogin.com"], // Ensures trust in your B2C tenant
    redirectUri: "https://management.spiritbound.gg/" // Redirect URL after login
  },
  cache: {
    cacheLocation: "localStorage", // Store tokens in localStorage
    storeAuthStateInCookie: true // Recommended for older browsers
  }
};

// Define request for authentication
const loginRequest = {
  scopes: ["openid", "offline_access"] // Required permissions for sign-in
};
