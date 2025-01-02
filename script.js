document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    // Register User
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Get users from LocalStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if email already exists
            if (users.some((user) => user.email === email)) {
                alert("Email is already registered. Please log in.");
                window.location.href = "login.html";
                return;
            }

            // Add new user
            users.push({ username, email, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration successful! Please log in.");
            window.location.href = "login.html";
        });
    }

    // Login User
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Get users from LocalStorage
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Authenticate user
            const user = users.find((user) => user.email === email && user.password === password);

            if (user) {
                alert(`Welcome back, ${user.username}!`);
                window.location.href = "index.html";
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }
});
