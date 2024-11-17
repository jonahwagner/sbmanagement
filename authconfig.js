// Configuration for MSAL.js
const msalConfig = {
  auth: {
    clientId: "26e0f56c-0f41-4f2e-836d-bc317bbbcb6a", // Replace with your Azure AD B2C App Registration's client ID
    authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1_sbconnect", // Replace with your user flow's authority
    redirectUri: "https://management.spiritbound.gg", // Replace with the redirect URI
    postLogoutRedirectUri: "https://management.spiritbound.gg", // URL to redirect to after logout
  },
  cache: {
    cacheLocation: "sessionStorage", // This can be "localStorage" if you want longer persistence
    storeAuthStateInCookie: false, // Recommended for modern browsers
  },
};

const loginRequest = {
  scopes: ["openid", "profile", "email"], // Scopes to request
};

const tokenRequest = {
  scopes: ["https://spiritbc.onmicrosoft.com/api/user.read"], // Example API scope for accessing protected resources
};
