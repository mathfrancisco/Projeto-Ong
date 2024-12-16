// script.js
function validarFormulario() {
    let forms = document.querySelectorAll('.needs-validation');
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    // Lógica para enviar o formulário (AJAX, etc.)
                    // Exemplo usando fetch API:
                    const formData = new FormData(form);

                    fetch('/enviar-formulario', { // Substitua '/enviar-formulario' pelo endpoint correto
                        method: 'POST',
                        body: formData
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Erro ao enviar o formulário.');
                            }
                            return response.text(); // ou response.json() se o servidor retornar JSON
                        })
                        .then(data => {
                            console.log('Sucesso:', data);
                            alert("Mensagem enviada com sucesso!");
                            form.reset();
                        })
                        .catch(error => {
                            console.error('Erro:', error);
                            alert("Erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
                        });


                }

                form.classList.add('was-validated');
            }, false);
        });
    return true;
}

// Chamada da função para inicializar a validação
validarFormulario();

