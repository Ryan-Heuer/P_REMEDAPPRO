document.addEventListener("DOMContentLoaded", function () {
    let bouton = document.querySelector(".boutonjeux");

    function positionAleatoire() {
        let largeurFenetre = window.innerWidth - bouton.offsetWidth;
        let hauteurFenetre = window.innerHeight - bouton.offsetHeight;

        let positionX = Math.random() * largeurFenetre;
        let positionY = Math.random() * hauteurFenetre;

        bouton.style.left = positionX + "px";
        bouton.style.top = positionY + "px";
    }

    // Positionner le bouton au chargement
    positionAleatoire();

    // Déplacer le bouton lorsqu'on clique dessus
    bouton.addEventListener("click", positionAleatoire);

    // Faire fuir le bouton quand la souris s'approche
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const btnRect = bouton.getBoundingClientRect();
        const btnX = btnRect.left + btnRect.width / 2;
        const btnY = btnRect.top + btnRect.height / 2;
        const distance = Math.hypot(mouseX - btnX, mouseY - btnY);
        const fuiteDistance = 100; // Distance de fuite

        if (distance < fuiteDistance) {
            const angle = Math.atan2(btnY - mouseY, btnX - mouseX);
            let moveX = Math.cos(angle) * 150;
            let moveY = Math.sin(angle) * 150;

            let newX = btnRect.left + moveX;
            let newY = btnRect.top + moveY;

            // Empêcher de sortir de l'écran
            newX = Math.max(0, Math.min(window.innerWidth - bouton.offsetWidth, newX));
            newY = Math.max(0, Math.min(window.innerHeight - bouton.offsetHeight, newY));

            // Appliquer la transition fluide
            bouton.style.transition = "left 0.3s ease, top 0.3s ease";

            // Appliquer la nouvelle position
            bouton.style.left = `${newX}px`;
            bouton.style.top = `${newY}px`;
        }
    });

    // Redirection vers win.html quand le bouton est cliqué
    bouton.addEventListener("click", function () {
        window.location.href = "win.html";
    });
});
