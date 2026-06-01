window.addEventListener("DOMContentLoaded", () => {

    const enterBtn = document.getElementById("enterBtn");
    const passwordInput = document.getElementById("passwordInput");

    const loginBox = document.getElementById("loginBox");
    const contentBox = document.getElementById("contentBox");

    const key = document.querySelector(".key");

    const SECRET = "SHREKINO";

    if (!enterBtn || !passwordInput || !loginBox || !contentBox || !key) {
        console.error("Elemento mancante nel DOM");
        return;
    }

    enterBtn.addEventListener("click", () => {

        const value = passwordInput.value.trim();

        if (value.toLowerCase() === SECRET.toLowerCase()) {

            loginBox.style.display = "none";
            contentBox.classList.remove("hidden");

            // reveal chiave
            key.style.opacity = "0";

            setTimeout(() => {
                key.style.transition = "2s ease";
                key.style.opacity = "1";
            }, 600);

        } else {
            alert("ACCESSO NEGATO");
        }

    });

});
