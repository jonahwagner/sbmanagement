const msalConfig = {
    auth: {
      clientId: "26e0f56c-0f41-4f2e-836d-bc317bbbcb6a", // Replace with your Application (client) ID
      authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1A_SignUpSignIn", // Replace with your B2C tenant and user flow
      redirectUri: "https://management.spiritbound.gg/auth-callback", // Replace with your redirect URI
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true,
    }
  };
  
  const loginRequest = {
    scopes: ["openid", "profile", "email"]
  };
  
  const msalInstance = new msal.PublicClientApplication(msalConfig);
  