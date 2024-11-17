import { msalConfig, loginRequest } from './authconfig.js';
import { PublicClientApplication } from '@azure/msal-browser';

const msalInstance = new PublicClientApplication(msalConfig);

function signIn() {
    msalInstance.loginPopup(loginRequest)
        .then(response => {
            console.log("Login successful:", response);
            // Redirect to the home page after login
            window.location.href = "home.html";
        })
        .catch(error => {
            console.error("Login failed:", error);
            alert("Login failed. Please try again.");
        });
}
