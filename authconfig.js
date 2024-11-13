const msalConfig = {
    auth: {
      clientId: "26e0f56c-0f41-4f2e-836d-bc317bbbcb6a", // From Azure AD B2C App Registration
      authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1_sbconnect", // B2C authority
      redirectUri: "https://management.spiritbound.gg/auth-callback", // Your redirect URI
    },
    cache: {
      cacheLocation: "localStorage", // or sessionStorage
      storeAuthStateInCookie: true, // Set to true for IE11/Edge support
    }
  };
  
  const loginRequest = {
    scopes: ["openid", "profile"] // Scopes you need
  };
  
  const msalInstance = new msal.PublicClientApplication(msalConfig);
  