const msalConfig = {
    auth: {
        clientId: "26e0f56c-0f41-4f2e-836d-bc317bbbcb6a",
        authority: "https://spiritbc.b2clogin.com/spiritbc.onmicrosoft.com/B2C_1_sbconnect", // Ensure this is your user flow
        redirectUri: "https://management.spiritbound.gg", // Match with your Azure App's redirect URI
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true,
    },
};
