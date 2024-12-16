// script.js
function validarFormulario() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) { // Usa a validação HTML5
            event.preventDefault();
            event.stopPropagation();
            mostrarErro("Por favor, preencha todos os campos obrigatórios.");
        } else {
            event.preventDefault(); // Impede envio real (sem backend)
            console.log('Sucesso:', new FormData(form));
            mostrarSucesso("Mensagem enviada com sucesso!");
            form.reset();
        }
        form.classList.add('was-validated'); // Adiciona estilos de validação do Bootstrap
    }, false);

    // Botão "Voltar ao Topo"
    const backToTopButton = document.createElement("button");
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>'; // Ícone de seta para cima (requer FontAwesome)
    backToTopButton.classList.add("btn", "btn-success", "back-to-top");
    backToTopButton.style.display = "none"; // Esconde o botão inicialmente
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) { // Mostra o botão após rolar 200px
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });


    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    });
}


function mostrarErro(mensagem) {
    const erroDiv = document.getElementById("erro-mensagem");
    if (erroDiv) {
        erroDiv.textContent = mensagem;
        erroDiv.style.display = "block";
    }
}

function mostrarSucesso(mensagem) {
    const sucessoDiv = document.getElementById("sucesso-mensagem");
    if (sucessoDiv) {
        sucessoDiv.textContent = mensagem;
        sucessoDiv.style.display = "block";

        setTimeout(function() {
            sucessoDiv.style.display = "none";
        }, 3000);
    }
}

// Chamada da função para inicializar a validação
validarFormulario();

