function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Replace with your actual user credentials (for demonstration)
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
        message.textContent = "Login successful!";
        message.style.color = "green";
        // You would typically redirect the user to another page here
        // window.location.href = "dashboard.html";
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }
}
