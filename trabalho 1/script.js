function escolherBasquete() {
    document.getElementById("story").textContent = 
        "Você entrou pro basquete, agora você pode jogar brincando ou treinar para virar profissinal.";
    document.querySelector(".choices").innerHTML = `
        <button onclick="jogarBrincando()">Jogar brincando</button>
        <button onclick="virarProfissional()">Virar profissional</button>
    `;
}

function escolherFutebol() {
    document.getElementById("story").textContent = 
        "Você entrou no futebol,você pode ser um atacante ou um zagueiro, qual você prefer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="serAtacante()">Ser atacante</button>
        <button onclick="serZagueiro()">Ser zagueiro</button>
    `;
}

function jogarBrincando() {
    document.getElementById("story").textContent = 
        "Você é chamado pra jogar um torneio regional e pode escolher ir ou ficar só jogando com os amigo, o que prefere?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="jogarTorneio()">Jogar torneio regional</button>
        <button onclick="continuarComAmigos()">Continuar com os amigos</button>
    `;
}

function virarProfissional() {
    document.getElementById("story").textContent = 
        "Você pode ficar treinando por 4 horas diariamente ou tentar virar treinador.";
    document.querySelector(".choices").innerHTML = `
        <button onclick="ficarTreinando()">Treinar por 4 horas diarias</button>
        <button onclick="treinador()">Tentar virar treinador</button>
    `;
}

function jogarTorneio() {
    document.getElementById("story").textContent = 
        "Seu time fica em segundo e te culpam por ser ruim. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function continuarComAmigos() {
    document.getElementById("story").textContent = 
        "Você continuou com seus amigos e eles ficam felizes com sua escolha. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function ficarTreinando() {
    document.getElementById("story").textContent = 
        "Você se torna um jogador memorável e é lembrado por muitos. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function treinador() {
    document.getElementById("story").textContent = 
        "Você se torna um bom treinador de basquete. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function serAtacante() {
    document.getElementById("story").textContent = 
        "Você seguiu carreira de atacante. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="treinarMuito()">treinar bastante</button>
        <button onclick="jogarSempre()">Jogar sempre que possivel</button>
    `;
}

function serZagueiro() {
    document.getElementById("story").textContent = 
        "Você seguiu pela carreira de zagueiro. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="sempreDarEntradas()">Sempre dar entradas pesadas</button>
        <button onclick="fazerDivididas()">Fazer divididas mais tranquilas</button>
    `;
}

function treinarMuito() {
    document.getElementById("story").textContent = 
        "Você treinou o suficiente para fazer mais de 500 gols. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function jogarSempre() {
    document.getElementById("story").textContent = 
        "Você jogou sempre que possivel, marcando em torno de 80 gols na sua carreira. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function sempreDarEntradas() {
    document.getElementById("story").textContent = 
        "Você foi expulso mais de 30 vezes, e foi lembrado negativamente! Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function fazerDivididas() {
    document.getElementById("story").textContent = 
        "Você decidiu dar divididas masi de boa eainda marcou alguns gols na carreira. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function reiniciar() {
    document.getElementById("story").textContent = 
             "Você está em frente a um ginasio. O que você deseja fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="escolherFutebol()">Ir pro futebol</button>
        <button onclick="escolherBasquete()">Ir pro basquete</button>
    `;
}