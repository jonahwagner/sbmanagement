async function signIn() {
  try {
    const loginResponse = await msalInstance.loginPopup(loginRequest);
    document.getElementById("login-message").innerText = `Welcome, ${loginResponse.account.username}!`;
    window.location.href = "/home.html"; // Redirect to the home page after login
  } catch (error) {
    console.error("Login error:", error);
    document.getElementById("login-message").innerText = "Login failed. Please try again.";
  }
}

async function signUp() {
  try {
    const signupRequest = { ...loginRequest, authority: msalConfig.auth.authority };
    const signupResponse = await msalInstance.loginPopup(signupRequest);
    document.getElementById("login-message").innerText = `Account created! Welcome, ${signupResponse.account.username}.`;
    window.location.href = "/home.html"; // Redirect to the home page after signup
  } catch (error) {
    console.error("Signup error:", error);
    document.getElementById("login-message").innerText = "Signup failed. Please try again.";
  }
}
