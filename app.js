const saudacao = document.getElementById('saudacao');
const frase = document.getElementById('frase');
const icone = document.getElementById('icone');

const frasesManha = ["Cada novo amanhecer é uma chance de recomeçar, fazer diferente e ser melhor."];
const frasesTarde = ["A tarde é o convite calmo do dia para seguir em frente com leveza e propósito."];
const frasesNoite = ["A noite chega como um abraço silencioso, trazendo descanso, paz e a esperança de um novo amanhã."];

function atualizaSaudacao() {
    const hoje = new Date();
    const hora = hoje.getHours();
    let msgSaudacao, imgFundo, imgIcone, frasesDoMomento;
    if (hora >= 5 && hora < 12) {
        msgSaudacao = 'Bom dia';
        imgFundo = "url(diaFundo.jpg)";
        imgIcone = "Bom Dia.png";
        frasesDoMomento = frasesManha;
    } else if (hora >= 12 && hora < 23) {
        msgSaudacao = 'Boa tarde';
        imgFundo = "url(tardeFundo.jpg)";
        imgIcone = "Boa Tarde.png";
        frasesDoMomento = frasesTarde;
    } else {
        msgSaudacao = 'Boa noite';
        imgFundo = "url(noiteFundo.jpg)";
        imgIcone = "Boa Noite.png";
        frasesDoMomento = frasesNoite;
    }
    saudacao.textContent = msgSaudacao;
    document.body.style.backgroundImage = imgFundo;
    icone.src = imgIcone;
    const randomIndex = Math.floor(Math.random() * frasesDoMomento.length);
    frase.textContent = frasesDoMomento[randomIndex];
}
atualizaSaudacao();
setInterval(atualizaSaudacao, 8000);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Erro no Service Worker:", err));
}
