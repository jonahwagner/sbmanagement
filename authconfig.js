const msalConfig = {
  auth: {
    clientId: "26e0f56c-0f41-4f2e-836d-bc317bbbcb6a", // From App Registration in Azure
    authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1_sbconnect", // Replace with your tenant's authority
    redirectUri: "https://management.spiritbound.gg/" // Make sure this matches your Azure setup
  },
  cache: {
    cacheLocation: "localStorage", // For storing auth state
    storeAuthStateInCookie: true
  }
};

const loginRequest = {
  scopes: ["openid", "offline_access"]
};
