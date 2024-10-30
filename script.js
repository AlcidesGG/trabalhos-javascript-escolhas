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

// Opções na floresta
function escolherEsquerda() {
    document.getElementById("story").textContent = 
        "Você seguiu pela esquerda e encontrou um lago mágico. Há algo brilhando no fundo. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="mergulharNoLago()">Mergulhar no lago</button>
        <button onclick="ignorarLago()">Ignorar o lago</button>
    `;
}

function escolherDireita() {
    document.getElementById("story").textContent = 
        "Você seguiu pela direita e encontrou um castelo misterioso. A porta está entreaberta. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="entrarNoCastelo()">Entrar no castelo</button>
        <button onclick="ficarFora()">Ficar do lado de fora</button>
    `;
}

// Respostas na floresta
function mergulharNoLago() {
    document.getElementById("story").textContent = 
        "Você mergulhou no lago e encontrou um tesouro escondido. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function ignorarLago() {
    document.getElementById("story").textContent = 
        "Você ignorou o lago e seguiu seu caminho pela floresta. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function entrarNoCastelo() {
    document.getElementById("story").textContent = 
        "Você entrou no castelo e descobriu que ele estava assombrado! Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function ficarFora() {
    document.getElementById("story").textContent = 
        "Você decidiu ficar do lado de fora do castelo e explorar o jardim. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function reiniciar() {
    document.getElementById("story").textContent = 
             "Você está em frente a uma caverna escura. O que você deseja fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="escolherCaverna()">Entrar na caverna</button>
        <button onclick="escolherFloresta()">Ir para a floresta</button>
    `;
}