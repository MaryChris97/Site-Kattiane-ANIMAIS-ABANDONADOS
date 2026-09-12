```javascript
/* =========================================
   AMOR ANIMAL
   JAVASCRIPT PRINCIPAL
========================================= */


/* =========================================
   MENU MOBILE
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        () => {

            mainNav.classList.toggle("show");

        }
    );

}


/* =========================================
   FECHAR MENU AO CLICAR EM UM LINK
========================================= */

const navLinks =
    document.querySelectorAll(".nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (mainNav) {

            mainNav.classList.remove("show");

        }

    });

});


/* =========================================
   FORMULÁRIO DE ADOÇÃO
========================================= */

const adoptionForm =
    document.getElementById("adoptionForm");


if (adoptionForm) {

    adoptionForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Cadastro enviado com sucesso! Em breve entraremos em contato."
            );

            adoptionForm.reset();

        }
    );

}


/* =========================================
   FILTRO DE ANIMAIS

   Futuramente pode ser conectado
   a um banco de dados.
========================================= */

const categoryButtons =
    document.querySelectorAll(".category-button");

const animalCards =
    document.querySelectorAll(".animal-card");


categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            categoryButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            this.classList.add("active");

            const category =
                this.dataset.category;

            animalCards.forEach(card => {

                if (
                    category === "todos" ||
                    card.dataset.category === category
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );

});


/* =========================================
   BUSCA POR ANIMAL
========================================= */

const animalSearch =
    document.getElementById("animalSearch");


if (animalSearch) {

    animalSearch.addEventListener(
        "input",
        function() {

            const search =
                this.value.toLowerCase();

            animalCards.forEach(card => {

                const name =
                    card.dataset.name?.toLowerCase() || "";

                if (name.includes(search)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );

}
```


document.addEventListener("DOMContentLoaded", function () {
    const partnerForm = document.getElementById("partnerForm");
    const successMessage = document.getElementById("successMessage");

    if (partnerForm) {
        partnerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let isValid = true;

            // Lista dos campos para validação simples
            const fields = ["empresaName", "responsibleName", "email", "phone", "city", "companyType", "helpType", "message"];

            fields.forEach((fieldId) => {
                const input = document.getElementById(fieldId);
                const errorSpan = document.getElementById(fieldId + "Error");

                if (!input.value.trim()) {
                    isValid = false;
                    if (errorSpan) errorSpan.textContent = "Campo obrigatório.";
                    input.style.borderColor = "#d95f00";
                } else {
                    if (errorSpan) errorSpan.textContent = "";
                    input.style.borderColor = "#eeeeee";
                }
            });

            // Validação de formato de e-mail simples
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            if (emailInput.value.trim() && !/\S+@\S+\.\S+/.test(emailInput.value)) {
                isValid = false;
                if (emailError) emailError.textContent = "Informe um e-mail válido.";
                emailInput.style.borderColor = "#d95f00";
            }

            if (isValid) {
                // Oculta o formulário e exibe mensagem de sucesso
                partnerForm.reset();
                if (successMessage) {
                    successMessage.style.display = "block";
                    successMessage.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // 1. Funcionalidade de Copiar Chave PIX
    const copyPixBtn = document.getElementById("copyPixBtn");
    const pixKeyInput = document.getElementById("pixKey");
    const copySuccess = document.getElementById("copySuccess");

    if (copyPixBtn && pixKeyInput) {
        copyPixBtn.addEventListener("click", function () {
            pixKeyInput.select();
            pixKeyInput.setSelectionRange(0, 99999); // Para dispositivos móveis

            navigator.clipboard.writeText(pixKeyInput.value).then(() => {
                if (copySuccess) {
                    copySuccess.style.display = "block";
                    setTimeout(() => {
                        copySuccess.style.display = "none";
                    }, 4000);
                }
            });
        });
    }

    // 2. Validação do Formulário de Voluntariado
    const volunteerForm = document.getElementById("volunteerForm");
    const volunteerSuccess = document.getElementById("volunteerSuccess");

    if (volunteerForm) {
        volunteerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let isValid = true;

            const fields = ["volName", "volEmail", "volPhone", "volInterest", "volAvailability", "volMessage"];

            fields.forEach((fieldId) => {
                const input = document.getElementById(fieldId);
                const errorSpan = document.getElementById(fieldId + "Error");

                if (!input.value.trim()) {
                    isValid = false;
                    if (errorSpan) errorSpan.textContent = "Campo obrigatório.";
                    input.style.borderColor = "#d95f00";
                } else {
                    if (errorSpan) errorSpan.textContent = "";
                    input.style.borderColor = "#eeeeee";
                }
            });

            const emailInput = document.getElementById("volEmail");
            const emailError = document.getElementById("volEmailError");
            if (emailInput.value.trim() && !/\S+@\S+\.\S+/.test(emailInput.value)) {
                isValid = false;
                if (emailError) emailError.textContent = "Informe um e-mail válido.";
                emailInput.style.borderColor = "#d95f00";
            }

            if (isValid) {
                volunteerForm.reset();
                if (volunteerSuccess) {
                    volunteerSuccess.style.display = "block";
                    volunteerSuccess.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const adoptionForm = document.getElementById("adoptionForm");
    const adoptionSuccess = document.getElementById("adoptionSuccess");

    if (adoptionForm) {
        adoptionForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let isValid = true;

            // Campos de texto e seleção obrigatórios
            const textAndSelectFields = [
                "fullName", "email", "phone", "city", "state",
                "housingType", "propertyStatus", "safeSpace", "otherPets", "hasChildren",
                "petPreference", "agePreference", "hadPetsBefore", "whyAdopt", "howToCare"
            ];

            textAndSelectFields.forEach((fieldId) => {
                const input = document.getElementById(fieldId);
                const errorSpan = document.getElementById(fieldId + "Error");

                if (!input || !input.value.trim()) {
                    isValid = false;
                    if (errorSpan) errorSpan.textContent = "Campo obrigatório.";
                    if (input) input.style.borderColor = "#d95f00";
                } else {
                    if (errorSpan) errorSpan.textContent = "";
                    if (input) input.style.borderColor = "#eeeeee";
                }
            });

            // Validação de E-mail
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            if (emailInput && emailInput.value.trim() && !/\S+@\S+\.\S+/.test(emailInput.value)) {
                isValid = false;
                if (emailError) emailError.textContent = "Informe um e-mail válido.";
                emailInput.style.borderColor = "#d95f00";
            }

            // Validação dos Checkboxes de Compromisso
            const checkboxes = ["checkTruth", "checkLongTerm", "checkContact"];
            checkboxes.forEach((checkId) => {
                const checkInput = document.getElementById(checkId);
                const checkError = document.getElementById(checkId + "Error");

                if (checkInput && !checkInput.checked) {
                    isValid = false;
                    if (checkError) checkError.textContent = "Você deve concordar com este item.";
                } else if (checkError) {
                    checkError.textContent = "";
                }
            });

            // Exibição de Sucesso Local
            if (isValid) {
                adoptionForm.reset();
                if (adoptionSuccess) {
                    adoptionSuccess.style.display = "block";
                    adoptionSuccess.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    }
});