const user = JSON.parse(localStorage.getItem("taskUser"));
if (!user) {
    alert("Please log in first.");
    window.location.href = "login.html";
}

document.getElementById("username").value = user.username;
document.getElementById("email").value = user.email;

function saveProfile(event) {
    event.preventDefault();

    const updatedUser = {
        ...user,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
    };

    localStorage.setItem("taskUser", JSON.stringify(updatedUser));
    alert("Profile updated successfully!");
}

function deleteAccount() {
    if (confirm("Are you sure you want to delete your account? This will remove your data.")) {
        localStorage.removeItem("taskUser");
        localStorage.removeItem("tasks");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("viewTaskId");
        alert("Account deleted.");
        window.location.href = "signup.html";
    }
}