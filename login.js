function signupUser(event) {
    event.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    localStorage.setItem("taskUser", JSON.stringify({ username, password }));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
}

function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = JSON.parse(localStorage.getItem("taskUser"));

    if (user && user.username === username && user.password === password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials!");
    }
}