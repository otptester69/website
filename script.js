// Toggle the sidebar visibility
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Toggle between Login and Sign Up forms
function showLogin() {
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("signUpForm").classList.remove("active");

    document.querySelector(".tab.active").classList.remove("active");
    document.querySelector(".tab:first-child").classList.add("active");
}

function showSignUp() {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signUpForm").classList.add("active");

    document.querySelector(".tab.active").classList.remove("active");
    document.querySelector(".tab:last-child").classList.add("active");
}

// Show the main container and hide the "Start Now" button when clicked
document.getElementById("startNowBtn").onclick = function() {
    document.getElementById("startNowBtnContainer").style.display = "none";
    document.getElementById("formContainer").style.display = "flex";
};

// OTP Generation and Sending
let otpValue;

function sendOTP() {
    const email = document.getElementById('new-email').value;
    otpValue = Math.floor(100000 + Math.random() * 900000);  // 6-digit OTP

    const emailBody = `<h2>Your OTP is</h2><p>${otpValue}</p>`;
    Email.send({
        SecureToken: "daf20176-44bf-4511-b144-506990c3206c",
        To: email,
        From: "otptester831@gmail.com",
        Subject: "Your opt for verification",
        Body: emailBody,
    }).then(message => {
        if (message === "OK") {
            alert("OTP sent to your email " + email);
            document.querySelector(".otp-section").style.display = "flex";
        } else {
            alert("Failed to send OTP. Please try again.");
        }
    });
}

// OTP Verification
function verifyOTP(event) {
    event.preventDefault();  // Prevent form submission
    const otpInput = document.getElementById('otp_inp').value;

    if (otpInput == otpValue) {
        alert("Email address verified!");
        // Proceed with the sign-up process (additional logic if needed)
    } else {
        alert("Invalid OTP. Please try again.");
    }
}

// Close sidebar when clicking outside
window.onclick = function(event) {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar.contains(event.target) && sidebar.classList.contains("active") && event.target.id !== "hamburgerMenuBtn") {
        sidebar.classList.remove("active");
    }
};
