let faseAtual = 0;
let pontuacao = 0;
let objetosRestantes = [];
let vidas = 5;
let dicasRestantes = 3;
let conquistas = [0, 0, 0, 0];

const feedbackElement = document.getElementById('feedback');

function iniciarJogo() {
    document.getElementById('introducao').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    iniciarFase();
}

function iniciarFase() {
    const fase = fases[faseAtual];
    objetosRestantes = [...fase.objetos];
    document.getElementById('titulo-fase').textContent = fase.nome;
    document.getElementById('numero-fase').textContent = faseAtual + 1;

    const container = document.getElementById('fase');
    container.style.backgroundImage = `url(${fase.fundo})`;
    container.innerHTML = '';

    // guarda as áreas já ocupadas
    const ocupados = [];
    const cw = container.clientWidth;
    const ch = container.clientHeight;

    objetosRestantes.forEach(obj => {
        const div = document.createElement('div');
        div.className = 'objeto';
        div.style.visibility = 'hidden';
        div.innerHTML = `<img src="${obj.imagem}" alt="${obj.nome}">`;
        container.appendChild(div);

        // depois de inserir, mede as dimensões reais
        const w = div.offsetWidth;
        const h = div.offsetHeight;

        // tenta achar uma posição livre
        let tentativa = 0;
        let x, y, area, colidiu;
        do {
            x = Math.random() * (cw - w);
            y = Math.random() * (ch - h);
            area = { x, y, w, h };
            colidiu = ocupados.some(o =>
                !(o.x + o.w < area.x ||
                  area.x + area.w < o.x ||
                  o.y + o.h < area.y ||
                  area.y + area.h < o.y)
            );
            tentativa++;
        } while (colidiu && tentativa < 100);

        // registra como ocupado
        ocupados.push(area);

        // converte para % pra manter responsividade no resize
        const leftPct = (x / cw) * 100;
        const topPct  = (y / ch) * 100;
        div.style.left = `${leftPct}%`;
        div.style.top  = `${topPct}%`;
        div.onclick = () => mostrarPergunta(div, obj);
        div.style.visibility = 'visible';
    });

    atualizarHud();
}


function mostrarPergunta(elemento, obj) {
    const dialogo = document.createElement('div');
    dialogo.className = 'dialogo';
    dialogo.innerHTML = `<p><strong>${obj.nome}</strong></p>`;

    obj.opcoes.forEach((opcao, index) => {
        const btn = document.createElement('button');
        btn.textContent = opcao;
        btn.onclick = () => verificarResposta(elemento, obj, index);
        dialogo.appendChild(btn);
    });

    document.body.appendChild(dialogo);
}

function verificarResposta(elemento, obj, resposta) {
    const correto = resposta === obj.correta;
    const dialogo = document.querySelector('.dialogo');

    if (correto) {
        pontuacao += 10;
        // fade out e remove rapidamente
        elemento.style.opacity = '0';
        setTimeout(() => elemento.remove(), 500);

        // remover do array de objetos restantes
        const idx = objetosRestantes.indexOf(obj);
        if (idx > -1) objetosRestantes.splice(idx, 1);

        feedbackElement.className = 'feedback acerto';
    } else {
        vidas--;
        feedbackElement.className = 'feedback erro';
    }

    feedbackElement.textContent = correto ? '✔️ Correto!' : '❌ Errado!';
    feedbackElement.innerHTML += `<div>${obj.explicacao}</div>`;

    document.body.removeChild(dialogo);
    atualizarHud();

    // mantém o feedback mais tempo
    setTimeout(() => {
        feedbackElement.textContent = '';
        // se esgotou objetos ou vidas, finaliza fase
        if (objetosRestantes.length === 0 || vidas <= 0) {
            finalizarFase();
        }
    }, 3000);
}

function atualizarHud() {
    document.getElementById('pontuacao').textContent = pontuacao;
    document.getElementById('vidas').textContent = vidas;
    document.getElementById('dicas-restantes').textContent = dicasRestantes;
    document.getElementById('progresso').style.width =
        `${(pontuacao / fases[faseAtual].minima) * 100}%`;

    // permite pular em todas as fases, exceto na última
    document.getElementById('pular').disabled = (faseAtual >= fases.length - 1);
}

function finalizarFase() {
    if (vidas <= 0) {
        mostrarFimDeJogo(false);
    } else if (pontuacao >= fases[faseAtual].minima) {
        if (faseAtual < fases.length - 1) {
            faseAtual++;
            iniciarFase();
        } else {
            mostrarFimDeJogo(true);
        }
    }
}

function mostrarFimDeJogo(vitoria) {
    const fimDiv = document.getElementById('fimdejogo');
    fimDiv.style.display = 'flex';
    fimDiv.innerHTML = `
        <h2>${vitoria ? '🎉 Parabéns!' : '😢 Tente novamente!'}</h2>
        <p>Pontuação final: ${pontuacao}</p>
        <button onclick="reiniciarJogo()">Jogar novamente</button>
    `;
    document.getElementById('jogo').style.display = 'none';
}

function reiniciarJogo() {
    faseAtual = 0;
    pontuacao = 0;
    vidas = 5;
    dicasRestantes = 3;
    document.getElementById('fimdejogo').style.display = 'none';
    iniciarJogo();
}

function mostrarDica() {
    if (dicasRestantes > 0) {
        alert("Dica: Separe os materiais por tipo (plástico, vidro, metal, papel)!");
        dicasRestantes--;
        atualizarHud();
    }
}

function pularFase() {
    if (faseAtual < fases.length - 1) {
        faseAtual++;
        iniciarFase();
    }
}

function reiniciarFase() {
    iniciarFase();
}

function mostrarFimDeJogo(vitoria) {
    const fimDiv = document.getElementById('fimdejogo');
    fimDiv.style.display = 'flex';
    fimDiv.innerHTML = `
      <div class="modal-fim">
        <h2>${vitoria ? '🎉 Parabéns!' : '😢 Tente novamente!'}</h2>
        <p>Pontuação final: ${pontuacao}</p>
        <button onclick="reiniciarJogo()">Jogar novamente</button>
      </div>
    `;
    document.getElementById('jogo').style.display = 'none';
}
