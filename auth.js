const msalInstance = new msal.PublicClientApplication(msalConfig);

async function signIn() {
    try {
        const loginResponse = await msalInstance.loginPopup({
            scopes: ["openid", "offline_access"],
        });
        console.log("Login Successful", loginResponse);
        window.location.href = "/home.html"; // Redirect after successful login
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please try again.");
    }
}
