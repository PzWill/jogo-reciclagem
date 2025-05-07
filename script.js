let faseAtual = 0;
let pontuacao = 0;
let objetosRestantes = [];
let vidas = 3;
let dicaMostrada = false;

const feedbackElement = document.getElementById('feedback');

function iniciarJogo() {
    document.getElementById('introducao').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    iniciarFase();
}

function iniciarFase() {
    const fase = fases[faseAtual];
    objetosRestantes = [...fase.objetos];
    atualizarHud();
    dicaMostrada = false; // Reset dica para cada fase
    document.getElementById('dica').style.display = 'block';

    // Define o título da fase
    const tituloFaseElement = document.getElementById('titulo-fase');
    tituloFaseElement.textContent = fase.nome;

    const container = document.getElementById('fase');
    container.style.backgroundImage = `url(${fase.fundo})`;
    container.innerHTML = ''; // Limpa o conteúdo anterior

    // Posicionamento aleatório sem sobreposição
    const objetosPosicionados = [];
    objetosRestantes.forEach((obj) => {
        const div = document.createElement('div');
        div.className = 'objeto';
        const img = document.createElement('img');
        img.src = obj.imagem;
        img.alt = obj.nome;

        // Adiciona fallback para imagens que não carregam
        img.onerror = () => {
            if (!img.dataset.fallback) {
                img.src = 'imagem_fallback.png'; // Substituir por uma imagem local ou padrão
                img.dataset.fallback = 'true'; // Marca que o fallback já foi aplicado
            } else {
                console.error(`Erro ao carregar a imagem: ${obj.imagem}`);
            }
        };

        div.appendChild(img);

        let top, left;
        do {
            top = Math.random() * 70 + '%'; // Garante que os objetos fiquem dentro de 70% da altura
            left = Math.random() * 80 + '%'; // Garante que os objetos fiquem dentro de 80% da largura
            div.style.top = top;
            div.style.left = left;
        } while (colideComOutroObjeto(div, objetosPosicionados));

        div.onclick = () => mostrarPergunta(div, obj);
        container.appendChild(div);
        objetosPosicionados.push(div);
    });

    atualizarProgresso();
}

function colideComOutroObjeto(objeto, objetosPosicionados) {
    for (let i = 0; i < objetosPosicionados.length; i++) {
        if (objetosPosicionados[i] !== objeto && intersecta(objeto, objetosPosicionados[i])) {
            return true;
        }
    }
    return false;
}

function intersecta(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

function mostrarPergunta(elemento, obj) {
    const dialogo = document.createElement('div');
    dialogo.className = 'dialogo';
    dialogo.innerHTML = `<p><strong>Como descartar: ${obj.nome}?</strong></p>`;
    obj.opcoes.forEach((texto, i) => {
        const btn = document.createElement('button');
        btn.textContent = texto;
        btn.onclick = () => {
            const correto = i === obj.correta;
            mostrarFeedback(correto, obj.explicacao);

            if (correto) {
                pontuacao += 10;
                elemento.style.opacity = 0;
                elemento.style.pointerEvents = 'none';
                setTimeout(() => elemento.remove(), 500); // Remover após a animação
                objetosRestantes = objetosRestantes.filter(o => o !== obj);

            } else {
                vidas--;
            }

            document.body.removeChild(dialogo);
            atualizarHud();

            if (objetosRestantes.length === 0 || vidas === 0) {
                setTimeout(() => finalizarFase(), 1000);
            }
        };
        dialogo.appendChild(btn);
    });
    document.body.appendChild(dialogo);
}

function mostrarFeedback(correto, explicacao) {
    feedbackElement.textContent = correto ? '✔️ Correto!' : '❌ Errado!';
    feedbackElement.className = `feedback ${correto ? 'acerto' : 'erro'}`;
    feedbackElement.style.opacity = 1;

    const explicacaoElement = document.createElement('div');
    explicacaoElement.id = 'explicacao';
    explicacaoElement.textContent = explicacao;
    feedbackElement.appendChild(explicacaoElement);

    setTimeout(() => {
        feedbackElement.style.opacity = 0;
        // Remover a explicação após o fade out
        if (feedbackElement.contains(explicacaoElement)) {
            feedbackElement.removeChild(explicacaoElement);
        }
    }, 2000);
}

function atualizarHud() {
    document.getElementById('pontuacao').textContent = pontuacao;
    document.getElementById('vidas').textContent = vidas;
    atualizarProgresso();
}

function atualizarProgresso() {
    const fase = fases[faseAtual];
    const progressoElement = document.getElementById('progresso');
    progressoElement.value = pontuacao;
    progressoElement.max = fase.minima;
}

function finalizarFase() {
    if (vidas === 0) {
        mostrarFimDeJogo(false);
    } else if (pontuacao >= fases[faseAtual].minima) {
        faseAtual++;
        if (faseAtual < fases.length) {
            iniciarFase();
        } else {
            mostrarFimDeJogo(true);
        }
    } else {
        mostrarFimDeJogo(false);
    }
}

function mostrarFimDeJogo(vitoria) {
    const fimdejogoDiv = document.getElementById('fimdejogo');
    fimdejogoDiv.style.display = 'flex';
    document.getElementById('jogo').style.display = 'none';
    fimdejogoDiv.innerHTML = `
        <h2>${vitoria ? '🎉 Parabéns! Você completou todas as fases! 🌱' : 'Você precisa aprender mais! 😓'}</h2>
        <p>${vitoria ? '' : 'Você não atingiu a pontuação mínima ou perdeu todas as vidas.'}</p>
        <button onclick="reiniciarJogo()">Jogar novamente</button>
    `;
}

function reiniciarJogo() {
    faseAtual = 0;
    pontuacao = 0;
    vidas = 3;
    dicaMostrada = false;
    document.getElementById('fimdejogo').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    iniciarFase();
}

function mostrarDica() {
    if (!dicaMostrada) {
        alert("Lembre-se de separar os recicláveis (papel, plástico, vidro, metal) dos orgânicos e do lixo comum. O descarte correto ajuda o meio ambiente!");
        dicaMostrada = true;
        document.getElementById('dica').style.display = 'none'; // Esconde o botão após mostrar a dica
    }
}

function pularFase() {
    if (faseAtual < fases.length - 1) {
        faseAtual++;
        iniciarFase();
    } else {
        mostrarFimDeJogo(true); // Se for a última fase, considera vitória
    }
}

function reiniciarFase() {
    iniciarFase(); // Reinicia a fase atual
}
