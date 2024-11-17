const msalConfig = {
  auth: {
    clientId: "26e0f56c-0f41-4f2e-836d-bc317bbbcb6a", // Replace with your Azure AD B2C application client ID
    authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1_sbconnect", // Your B2C tenant and user flow
    knownAuthorities: ["spiritbc.b2clogin.com"], // B2C tenant domain
    redirectUri: "https://management.spiritbound.gg", // Your website's URL
  },
};

const loginRequest = {
  scopes: ["openid", "profile", "email"], // Scopes for the login request
};

const msalInstance = new msal.PublicClientApplication(msalConfig);
