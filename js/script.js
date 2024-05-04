const inputCheck = document.querySelector('#dark-mode')
const element = document.querySelector('body')
inputCheck.addEventListener('click',() => {
    const mode = inputCheck.checked ? 'dark': 'light'
    element.setAttribute("data-bs-theme", mode)
})
function atualizarData() {
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    // Exibir a data no formato desejado (por exemplo, 'DD/MM/AAAA')
    let dataFormatada = `${dia}/ ${mes}/ ${ano}`

    // Atualizar o conteúdo HTML com a data atualizada
    document.getElementById('dataAtual').innerHTML = `&copy; Desenvolvido por Lucas Soares ${dataFormatada}`;
}
window.onload = function() {
    atualizarData();
};