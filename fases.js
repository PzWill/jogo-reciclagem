const fases = [
    {
        nome: '🔪 Cozinha (Fácil)',
        minima: 50,
        fundo: 'https://i.pinimg.com/736x/8d/2b/87/8d2b877b394e33e4891991000b4a2787.jpg',
        objetos: [
            {
                nome: 'Garrafa PET vazia',
                correta: 1,
                imagem: 'https://img.freepik.com/vetores-gratis/icone-de-bebida-plastica-de-garrafa-de-agua_18591-82523.jpg?semt=ais_hybrid&w=740',
                opcoes: ['Lixo comum', 'Coleta seletiva (plástico)', 'Pia'],
                explicacao: 'Garrafas PET devem ser lavadas e descartadas na coleta seletiva (plástico) para serem recicladas.'
            },
            {
                nome: 'Casca de banana',
                correta: 0,
                imagem: 'https://st4.depositphotos.com/24038622/27054/v/450/depositphotos_270548408-stock-illustration-banana-peel-cartoon-illustration-banana.jpg',
                opcoes: ['Composteira doméstica', 'Lixo reciclável', 'Privada'],
                explicacao: 'Cascas de banana são orgânicas e podem ser compostadas para gerar adubo.'
            },
            {
                nome: 'Caixa de leite (tetrapak)',
                correta: 1,
                imagem: 'https://png.pngtree.com/element_pic/17/04/09/770d11c4a9a720f59149e7489fd47d46.jpg',
                opcoes: ['Lixo orgânico', 'Coleta seletiva (com lavagem)', 'Composteira'],
                explicacao: 'Caixas de leite (tetrapak) devem ser lavadas e descartadas na coleta seletiva. A reciclagem desse material requer um processo específico.'
            },
            {
                nome: 'Pote de margarina',
                correta: 0,
                imagem: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/217198-800-450?v=638532154694800000&width=800&height=450&aspect=true',
                opcoes: ['Reciclagem (limpo)', 'Lixo orgânico', 'Lixo eletrônico'],
                explicacao: 'Potes de margarina devem ser limpos e descartados na reciclagem de plástico.'
            },
            {
                nome: 'Guardanapo usado',
                correta: 0,
                imagem: 'https://media.gettyimages.com/id/165670715/pt/vetorial/guardanapo-com-mancha-de-caf%C3%A9.jpg?s=612x612&w=gi&k=20&c=POo97APoIpIgqq80hjfQWC1rlZMeOveVuDsLR3agP3s=',
                opcoes: ['Lixo comum', 'Reciclagem (papel)', 'Composteira'],
                explicacao: 'Guardanapos usados, principalmente se sujos, devem ser descartados no lixo comum.'
            },
            {
                nome: 'Lata de milho',
                correta: 0,
                imagem: 'https://thumbs.dreamstime.com/b/lata-aberta-vazia-do-a%C3%A7o-21186089.jpg',
                opcoes: ['Reciclagem (metais)', 'Lixo comum', 'Orgânico'],
                explicacao: 'Latas de milho vazias e limpas devem ser descartadas na reciclagem de metais.'
            },
            {
                nome: 'Saquinho de chá usado',
                correta: 0,
                imagem: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2511444-saquinho-de-cha-cha-cafe-da-manha-saquinho-de-cha-estilo-cartoon-vetor.jpg',
                opcoes: ['Composteira', 'Reciclável (plástico)', 'Coleta de vidro'],
                explicacao: 'Saquinhos de chá usados, se biodegradáveis, podem ser compostados. Caso contrário, descarte no lixo comum.'
            },
            {
                nome: 'Tampa de garrafa',
                correta: 0,
                imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkNRS225X9wiOMJCIwUPVV36AjWI9Vv07Bg&s',
                opcoes: ['Reciclável (plástico pequeno)', 'Lixo eletrônico', 'Orgânico'],
                explicacao: 'Tampas de garrafa plásticas devem ser descartadas na reciclagem de plástico, mesmo as pequenas.'
            }
        ]
    },
    {
        nome: '🛏️ Quarto (Médio)',
        minima: 70,
        fundo: 'https://img.freepik.com/vetores-gratis/interior-do-quarto-do-sotao-infantil_107791-25388.jpg?semt=ais_hybrid&w=740',
        objetos: [
            {
                nome: 'Pilha usada',
                correta: 0,
                imagem: 'https://img.freepik.com/vetores-premium/bateria_757131-6213.jpg?semt=ais_hybrid&w=740',
                opcoes: ['Ponto de coleta de pilhas', 'Lixo comum', 'Reciclagem papel'],
                explicacao: 'Pilhas usadas devem ser descartadas em pontos de coleta específicos, devido aos seus componentes químicos.'
            },
            {
                nome: 'Papel de rascunho',
                correta: 0,
                imagem: 'https://static.vecteezy.com/ti/vetor-gratis/p1/10313165-notebook-sheet-white-page-paper-list-from-notepad-flat-cartoon-icon-vetor.jpg',
                opcoes: ['Coleta seletiva (papel)', 'Lixo comum', 'Composteira'],
                explicacao: 'Papel de rascunho, sem plastificação ou muita tinta, pode ser reciclado na coleta seletiva (papel).'
            },
            {
                nome: 'Meia rasgada',
                correta: 0,
                imagem: 'https://st2.depositphotos.com/5971520/11929/v/950/depositphotos_119297298-stock-illustration-old-pair-of-holed-socks.jpg',
                opcoes: ['Descarte em Ecoponto (reuso/retalho)', 'Lixo comum', 'Vidro reciclável'],
                explicacao: 'Meias rasgadas podem ser descartadas em Ecopontos para reuso ou reaproveitamento do tecido (retalhos).'
            },
            {
                nome: 'Revista velha',
                correta: 0,
                imagem: 'https://ensinarhistoria.com.br/s21/wp-content/uploads/2016/05/politica_1919_diabo-mudando-votos-692x1024.jpg',
                opcoes: ['Coleta seletiva (papel)', 'Composteira', 'Lixo eletrônico'],
                explicacao: 'Revistas velhas, sem plastificação ou muita tinta, podem ser recicladas na coleta seletiva (papel).'
            },
            {
                nome: 'Carregador queimado',
                correta: 0,
                imagem: 'https://static.vecteezy.com/ti/vetor-gratis/p1/15430874-desenho-de-ilustracaoial-de-carregador-de-celular-com-arte-e-cores-simples-de-linha-limpa-de-desenho-animado-carregador-usb-de-voltagem-preto-escuro-para-telefone-isolado-com-fundo-branco-e-verde-gratis-vetor.jpg',
                opcoes: ['Lixo eletrônico', 'Reciclagem plástica', 'Lixo comum'],
                explicacao: 'Carregadores queimados devem ser descartados como lixo eletrônico em pontos de coleta apropriados.'
            },
            {
                nome: 'Papel alumínio amassado',
                correta: 0,
                imagem: 'https://png.pngtree.com/background/20230411/original/pngtree-crumpled-ball-of-aluminum-foil-photo-picture-image_2390344.jpg',
                opcoes: ['Reciclagem (metálicos)', 'Lixo orgânico', 'Composteira'],
                explicacao: 'Papel alumínio, mesmo amassado, pode ser reciclado na coleta seletiva de metais.'
            },
            {
                nome: 'Caderno usado',
                correta: 0,
                imagem: 'https://png.pngtree.com/png-clipart/20190117/ourmid/pngtree-beautiful-notebook-hand-drawn-notebook-cartoon-notebook-notebook-decoration-png-image_413284.jpg',
                opcoes: ['Coleta seletiva (tirar espiral)', 'Composteira', 'Lixo comum'],
                explicacao: 'Cadernos usados podem ser reciclados na coleta seletiva de papel, de preferência retirando a espiral metálica.'
            },
            {
                nome: 'Bolsa velha de pano',
                correta: 0,
                imagem: 'https://static.vecteezy.com/ti/vetor-gratis/p1/19056512-bolsa-de-lona-comprador-ecologico-de-pano-ilustracao-plana-dos-desenhos-animados-sacola-reutilizavel-para-mantimentos-vetor.jpg',
                opcoes: ['Doação/Descarte têxtil', 'Composteira', 'Plástico reciclável'],
                explicacao: 'Bolsas velhas de pano podem ser doadas ou descartadas em pontos de coleta de têxteis.'
            },
            {
                nome: 'Envelopes com cola',
                correta: 0,
                imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgQ1iNIlnT7-ktxcjfiV-H2mpr4wyZRcA4A&s',
                opcoes: ['Lixo comum', 'Papel reciclável', 'Composteira'],
                explicacao: 'Envelopes com cola, devido à dificuldade de separação dos materiais, devem ser descartados no lixo comum.'
            },
            {
                nome: 'Lâmpada quebrada',
                correta: 0,
                imagem: 'https://i.imgur.com/QZsUdwL.png',
                opcoes: ['Ponto específico de descarte', 'Lixo comum', 'Vidro reciclável'],
                explicacao: 'Lâmpadas quebradas, principalmente fluorescentes, exigem descarte em pontos específicos devido ao mercúrio.'
            },

        ]
    },
    {
        nome: '🛋️ Sala (Difícil)',
        minima: 90,
        fundo: 'https://static.vecteezy.com/ti/vetor-gratis/p1/17508044-interior-da-sala-de-desenhoial-com-grandes-janelas-cama-cadeira-tv-mesa-e-plantas-de-casa-vetor.jpg',
        objetos: [
            {
                nome: 'Controle remoto antigo',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/122/122074.png',
                opcoes: ['Lixo eletrônico', 'Lixo comum', 'Reciclagem de metal'],
                explicacao: 'Controles remotos antigos contêm componentes eletrônicos e devem ser descartados como lixo eletrônico.'
            },
            {
                nome: 'Copo de vidro quebrado',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/706/706157.png',
                opcoes: ['Envolver e lixo comum', 'Coleta seletiva', 'Composteira'],
                explicacao: 'Vidro quebrado deve ser envolvido em jornal ou papelão e descartado no lixo comum, com a indicação de "vidro quebrado" para evitar acidentes.'
            },
            {
                nome: 'DVD velho',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/384/384947.png',
                opcoes: ['Lixo eletrônico', 'Coleta de papel', 'Lixo orgânico'],
                explicacao: 'DVDs velhos são considerados lixo eletrônico.'
            },
            {
                nome: 'Pilha recarregável',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/1031/1031429.png',
                opcoes: ['Ponto de coleta específico', 'Lixo comum', 'Composteira'],
                explicacao: 'Pilhas recarregáveis, assim como as comuns, devem ser descartadas em pontos de coleta específicos.'
            },
            {
                nome: 'Tecido de sofá rasgado',
                correta: 0,
                imagem: 'https://img.freepik.com/vetores-gratis/ilustracao-de-tecido_53876-87066.jpg',
                opcoes: ['Ecoponto têxtil', 'Composteira', 'Plástico reciclável'],
                explicacao: 'Tecidos rasgados podem ser descartados em ecopontos têxteis para possível reutilização ou reciclagem.'
            },
            {
                nome: 'Espuma de almofada',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/6790/6790916.png',
                opcoes: ['Ecoponto ou lixo comum', 'Composteira', 'Papel reciclável'],
                explicacao: 'Espuma de almofada, dependendo do tipo e estado, pode ser descartada em ecopontos ou no lixo comum. Verifique as regras locais.'
            },
            {
                nome: 'Garrafa de vidro',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/3145/3145765.png',
                opcoes: ['Coleta seletiva (vidro)', 'Lixo comum', 'Composteira'],
                explicacao: 'Garrafas de vidro devem ser descartadas na coleta seletiva de vidro.'
            },
            {
                nome: 'Papelão de embalagem',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/2991/2991145.png',
                opcoes: ['Reciclagem (papelão limpo)', 'Composteira', 'Lixo comum'],
                explicacao: 'Papelão de embalagem limpo deve ser descartado na reciclagem de papel.'
            },
            {
                nome: 'Fio elétrico antigo',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/6883/6883261.png',
                opcoes: ['Lixo eletrônico', 'Reciclável (plástico)', 'Lixo comum'],
                explicacao: 'Fios elétricos antigos são considerados lixo eletrônico.'
            },
            {
                nome: 'Quadro com moldura',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/2642/2642871.png',
                opcoes: ['Descarte seletivo (madeira/vidro)', 'Lixo orgânico', 'Composteira'],
                explicacao: 'Quadros com moldura exigem descarte seletivo, separando a moldura (madeira) do vidro, se houver.'
            },
            {
                nome: 'Plástico filme de embalagem',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/7652/7652323.png',
                opcoes: ['Lixo comum', 'Reciclagem (plástico)', 'Composteira'],
                explicacao: 'Plástico filme de embalagem geralmente não é reciclável e deve ser descartado no lixo comum. Verifique as regras locais, pois alguns locais podem ter programas específicos.'
            },
            {
                nome: 'Espelho rachado',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/1810/1810167.png',
                opcoes: ['Lixo comum (com segurança)', 'Coleta seletiva', 'Composteira'],
                explicacao: 'Espelhos rachados devem ser descartados no lixo comum, envoltos em jornal ou papelão para evitar acidentes, com a indicação de "vidro quebrado".'
            },
        ]
    },
    {
        nome: '🚽 Banheiro (Muito Difícil)',
        minima: 110,
        fundo: 'https://thumbs.dreamstime.com/b/limpe-o-interior-bonito-do-banheiro-102405780.jpg',
        objetos: [
            {
                nome: 'Escova de dentes velha',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/1684/1684384.png',
                opcoes: ['Lixo comum', 'Composteira', 'Reciclagem plástica'],
                explicacao: 'Escovas de dentes devem ser descartadas no lixo comum, pois suas cerdas geralmente não são recicláveis.'
            },
            {
                nome: 'Embalagem de shampoo',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/2948/2948035.png',
                opcoes: ['Reciclagem (plástico limpo)', 'Lixo comum', 'Composteira'],
                explicacao: 'As embalagens de shampoo, após lavadas e secas, devem ser descartadas na coleta seletiva de plástico.'
            },
            {
                nome: 'Algodão usado',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/7396/7396275.png',
                opcoes: ['Lixo comum', 'Composteira', 'Papel reciclável'],
                explicacao: 'Algodão usado, por questões de higiene, deve ser descartado no lixo comum.'
            },
            {
                nome: 'Medicamento vencido',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png',
                opcoes: ['Devolução em farmácias', 'Lixo comum', 'Lixo eletrônico'],
                explicacao: 'Medicamentos vencidos devem ser devolvidos em farmácias ou postos de saúde para descarte adequado.'
            },
            {
                nome: 'Fio dental usado',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/4914/4914220.png',
                opcoes: ['Lixo comum', 'Composteira', 'Reciclagem plástica'],
                explicacao: 'Fio dental usado deve ser descartado no lixo comum.'
            },
            {
                nome: 'Pote de creme',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                opcoes: ['Reciclagem (plástico)', 'Lixo comum', 'Composteira'],
                explicacao: 'Potes de creme, após lavados e secos, devem ser descartados na coleta seletiva de plástico.'
            },
            {
                nome: 'Papel higiênico usado',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/10000/10000268.png',
                opcoes: ['Lixo comum', 'Composteira', 'Reciclagem de papel'],
                explicacao: 'Papel higiênico usado deve ser descartado no lixo comum.'
            },
            {
                nome: 'Sabonete embalado no plástico',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
                opcoes: ['Reciclagem (embalagem)', 'Composteira', 'Lixo eletrônico'],
                explicacao: 'A embalagem plástica do sabonete, após lavada e seca, deve ser descartada na coleta seletiva de plástico.'
            },
            {
                nome: 'Escova de cabelo quebrada',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/6073/6073796.png',
                opcoes: ['Lixo comum', 'Reciclagem plástica', 'Lixo eletrônico'],
                explicacao: 'Escovas de cabelo quebradas devem ser descartadas no lixo comum.'
            },
            {
                nome: 'Cotonete',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/7467/7467203.png',
                opcoes: ['Lixo comum', 'Reciclagem de papel', 'Composteira'],
                explicacao: 'Cotonetes devem ser descartados no lixo comum.'
            },
            {
                nome: 'Caixa de remédio de papel',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/6197/6197173.png',
                opcoes: ['Reciclagem (papel)', 'Composteira', 'Lixo comum'],
                explicacao: 'Caixas de remédio de papel podem ser descartadas na coleta seletiva de papel.'
            },
            {
                nome: 'Lâmina de barbear',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/4732/4732192.png',
                opcoes: ['Lixo comum (embalada)', 'Reciclagem de metal', 'Composteira'],
                explicacao: 'Lâminas de barbear devem ser descartadas no lixo comum, envolvidas em papel ou em sua embalagem original para evitar acidentes.'
            },
            {
                nome: 'Vidro de perfume vazio',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/2769/2769601.png',
                opcoes: ['Coleta seletiva (vidro)', 'Lixo comum', 'Composteira'],
                explicacao: 'Vidros de perfume vazios devem ser descartados na coleta seletiva de vidro.'
            },
            {
                nome: 'Toalha velha',
                correta: 0,
                imagem: 'https://cdn-icons-png.flaticon.com/512/1598/1598162.png',
                opcoes: ['Reaproveitamento ou descarte têxtil', 'Composteira', 'Papel reciclável'],
                explicacao: 'Toalhas velhas podem ser reaproveitadas como panos de limpeza ou descartadas em pontos de coleta de têxteis.'
            },
        ]
    }
];
