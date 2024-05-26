document.addEventListener("DOMContentLoaded", () => {
    // Navigation animation on click
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // User Authentication
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = signUpForm['email'].value;
            const password = signUpForm['password'].value;
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert('Signed up successfully!');
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    const logInForm = document.getElementById('logInForm');
    if (logInForm) {
        logInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = logInForm['email'].value;
            const password = logInForm['password'].value;
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert('Logged in successfully!');
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    const logOutButton = document.getElementById('logOutButton');
    if (logOutButton) {
        logOutButton.addEventListener('click', () => {
            auth.signOut()
                .then(() => {
                    alert('Logged out successfully!');
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    // Feedback Form Submission
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = feedbackForm['feedbackText'].value;
            alert('Feedback submitted! Thank you for your input.');
        });
    }

    // Bookmark Functionality
    const bookmarkButtons = document.querySelectorAll('.bookmarkButton');
    bookmarkButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.subsection, .section');
            alert(`Bookmarked: ${item.querySelector('h3, h2').textContent}`);
        });
    });
});function toggleNav() {
    document.querySelector('nav').classList.toggle('show');
  }
