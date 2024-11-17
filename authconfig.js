const msalConfig = {
    auth: {
        clientId: "26e0f56c-0f41-4f2e-836d-bc317bbbcb6a", // Replace with your Azure AD B2C client ID
        authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1_sbconnect", // Replace with your authority
        redirectUri: "https://management.spiritbound.gg", // Your redirect URI
    },
    cache: {
        cacheLocation: "localStorage", // Configure where your cache will be stored
        storeAuthStateInCookie: true, // Set to "true" for IE11 or Edge
    },
};

const loginRequest = {
    scopes: ["openid", "offline_access"],
};
