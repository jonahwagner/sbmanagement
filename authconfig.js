const msalConfig = {
    auth: {
        clientId: "26e0f56c-0f41-4f2e-836d-bc317bbbcb6a", // Your Application (client) ID
        authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1_sbconnect", // Your B2C authority
        redirectUri: "https://management.spiritbound.gg", // Must match the redirect URI in Azure
    },
    cache: {
        cacheLocation: "sessionStorage", // Store tokens in sessionStorage
        storeAuthStateInCookie: true, // Recommended for IE11 or Edge
    }
};

const loginRequest = {
    scopes: ["openid", "profile"]
};

export { msalConfig, loginRequest };
