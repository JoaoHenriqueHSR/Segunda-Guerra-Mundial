function mudarTexto(tag,texto){
    let paragrafo=document.querySelector(tag);
    paragrafo.innerHTML=texto;
}

function mudarCorPagina(corFundo,corTxt){
    let corpo=document.querySelector(`body`);
    corpo.style.backgroundColor=corFundo;
    corpo.style.color=corTxt;
}
document.querySelector(`.botao_claro`).addEventListener(`click`, function(){
    mudarCorPagina(`#3E3232`,`#ffff`);
    document.querySelector(`.titulo`).style.background=`linear-gradient(to top,#A87C7C, #503C3C)`;
    document.querySelector(`main`).style.background=`linear-gradient(to top,#3E3232,#7E6363,#3E3232)`;
    document.getElementById(`apresentacao`).style.background=`#A87C7C`;
    document.getElementById(`contexto`).style.background=`#A87C7C`;
    document.getElementById(`consequencias`).style.background=`#A87C7C`;
    document.querySelector(`.credito`).style.background=`#996666`;
});
document.querySelector(`.botao_escuro`).addEventListener(`click`, function(){
    mudarCorPagina(`#000000`,`#ffff`);
    document.querySelector(`.titulo`).style.background=`linear-gradient(to top,#494949, #212121)`;
    document.querySelector(`main`).style.background=`linear-gradient(to top,#000000,#212121 ,#000000)`;
    document.getElementById(`apresentacao`).style.background=`#494949`;
    document.getElementById(`contexto`).style.background=`#494949`;
    document.getElementById(`consequencias`).style.background=`#494949`;
    document.querySelector(`.credito`).style.background=`#5c5c5c`;
});

mudarTexto(`.titulo`,`Segunda Guerra Mundial`);
mudarTexto(`.paragrafo`,`A segunda guerra mundial se iniciou no dia 1 de setembro de 1939, com a Alemanha invadindo a Polônia, so terminando com a rendição do Japão no dia 2 de
Setembro de 1945.
<br> Foi o maior conflito da Historia, envolvendo a maioria dos países do globo, sendo os principais:<br>Eixo: Alemanha, Japão e Itália. <br>Aliados: Reino Unido, França, 
União Soviética e Estados Unidos.<br> Essa guerra trouxe varias consequências, como a criação de Israel e da ONU, uma grande evolução tecnológica, e tenções nucleares entre os 
países do Ocidente e Oriente, que levaram a Guerra Fria.`);

document.getElementById(`apresentacao`).addEventListener(`click`,function(){
    mudarTexto(`.paragrafo`,`A segunda guerra mundial se iniciou no dia 1 de setembro de 1939, com a Alemanha invadindo a Polônia, so terminando com a rendição do Japão no dia 2 de
    Setembro de 1945.
    <br> Foi o maior conflito da Historia, envolvendo a maioria dos países do globo, sendo os principais:<br>Eixo: Alemanha, Japão e Itália. <br>Aliados: Reino Unido, França, 
    União Soviética e Estados Unidos.<br> Essa guerra trouxe varias consequências, como a criação de Israel e da ONU, uma grande evolução tecnológica, e tenções nucleares entre os 
    países do Ocidente e Oriente, que levaram a Guerra Fria.`);
    document.querySelector(`.imagem`).src=`./img/polonia.jpg`;
});

document.getElementById(`contexto`).addEventListener(`click`, function(){
    mudarTexto(`.paragrafo`,`Como consequência da primeira guerra, as potencias vencedoras fizeram a Alemanha assinar o tratado de Versalhes, no qual fazia a mesma a ceder, defendendo
    ideias nacionalistas, uma delas criadas por Anton Drexler, em 1919 foi alvo de espionagem por um veterano da primeira guerra, chamado de Adolf Hitler, mas log suas 
    colônias, diminuir seu exercito a menos de 100 mil soldados, desmilitarizar a fronteiras com os países ocidentais, ceder mineradoras perto da franca, e pagar pelos danos
    causados nesse conflito.
    <br> Ex combatentes que não aceitavam o resultado e os termos que a Alemanha deveria seguir, começaram a criar organizações e partidos contra a republica de Weimar acabou gostando 
    as ideias desse partido, e assim se juntando e se tornando o líder do mesmo em 1920.
    <br> Com seu carisma e oratória, Hitler começou a ganhar destaque nesse mundo, ate um dia em que tentou dar um golpe em um bar, com a intenção de derrubar o governo do estado da 
    Baviera. Mas acabou fracassando e sendo preso dias depois.
    <br> No julgamento ele foi condenado a 5 anos, mas cumpriu só 8 meses, e durante esse tempo escreveu Mein Kampf, onde expressava seus pensamentos. O golpe e o julgamento fez com
    que Hitler e seu seu partido ficassem cada vez mais famosos.
    <br> Com toda essa fama, com o passar do tempo a população Alemã o apoiava tanto que nem mesmo o presidente alemão Paul von Hindenburg, poderia ignora-lo, e com isso nomeou
    Hitler como chanceler em 1933, e não muito depois, Hindenburg acabou ficando doente, e deixando Hitler ainda mais poderoso, ate que por fim o presidente faleceu. Aproveitando
    disso, o chanceler unificou o seu cargo e o de presidente em um só, dando assim o poder da nação em suas mãos.
    <br> Já comando a Alemanha, Hitler começou pouco em pouco a desfazer as exigências impostas pelo tratado de Versalhes, como aumentar o exercito, e militarizar as fronteiras.
    E ate 1939 iria invadir e anexar vários países do leste europeu ate chegar nas fronteiras polonesas. Hitler estava confiante de que nem França e Reino unido iriam se intrometer
    com a invasão na Polônia, como já fizeram com outros países no qual se tornaram parte do reich alemão afim de manterem a paz na Europa. Com isso, no dia 1 de setembro de 1939
    a Alemanha invade a Polônia, usando sua grande estratégia de dominação relâmpago, a Blitzkrieg, dando inicio a Segunda Guerra Mundial. Dia 17 foi a vez da URSS invadir a Polônia, 
    pois a Alemanha e a União Soviética haviam assinado um pacto de não agressão em Agosto.
    <br> Por vários meses a guerra ficou parada, sem ações de ambas as partes, tendo a Alemanha, suspeita de que ajudas estavam sendo enviadas do reino unido ate a Noruega, assim
    assim iniciando os planos para dominar a nação, no dia 9 de Abriu de 1940 uma ofensiva a Dinamarca que durou 1 dia, já a Noruega resistiu mais tempo, mas caiu em 10 de Junho. 
    Apos isso, a Alemanha iniciou a ofensa em direção da França, onde houve uma das estratégias mais notórias da guerra, a França esperava que a Alemanha iria tentar um conflito 
    direto nas fronteiras, igual a da Primeira Guerra, e queria evitar isso mas as forças da Wehrmacht no dia 10 de Maio de 1940 preferiram passar pelas florestas dos países baixos, 
    assim dando um golpe surpresa nos franceses, empurrando eles ate o Canal da Mancha. No dia 5 de Junho os alemães iniciaram a conquista em Paris, tendo terminado no dia 14 com a 
    derrota da França.
    <br> Com o passar do tempo, já em Abril de 1941, a Alemanha e Itália começaram a dominar os países do mediterrâneo, um deles sendo a Grécia, o qual tinha ficado por conta da 
    Itália, mas acabou tendo dificuldade, o que fez a Alemanha ajudar e dominar a Grécia em Maio, tendo assim atrasado o grande plano de Hitler, o de invadir a União Soviética, a 
    "Operação Barbarossa". Então, no dia 22 de Junho de 1941, a operação foi iniciada, mais de 4 milhões de soldados do eixo invadiram a União Soviética, sendo a maior invasão da 
    historia.
    <br> Uma das estratégias Soviéticas, foram a mesma que aplicaram contra a invasão de Napoleão, a de "terra arrasada", que consistia em deixar o inimigo avançar e queimar e
    destruir recursos durante o caminho, e como o pais era grande, dificultava ataques específicos e rápidos como o Blitzkrieg. As forças do eixo cada vez mais adentravam a URSS,
    fora o pais ser grande e a estratégia de terra arrasada, tinha falta de infraestrutura e o inverno russo, o que dificulto muito o avanço do eixo.
    <br> Em uma estratégia de impedir que houvesse uma interferências nas ações japonesas do Pacifico, no dia 7 de Dezembro de 1941 a força área do Japão fez um ataque surpresa ao
    estaleiro naval de Pearl Harbor, fazendo assim a população estadunidense pedir ações do presidente Roosevelt, formalizando uma declaração de guerra contra o Eixo.
    <br> Já perto de Moscou, Hitler ordenou que parte da Wehrmacht fosse para o sul, atrás dos campos de petróleo que haviam na região, mas ao invés de focar toda as forçar nisso,
    ordenou também que outra divisão fosse para uma cidade chamada de Stalingrado, isso era mais um jogo para atacar o orgulho do líder soviético. No dia 23 de Agosto de 1942 se
    iniciou o ataque contra a cidade, deixando ela em ruinas, e deixando as tropas soviéticas encurralada do outro lado do rio Volga. Essa batalha foi muito desgastante para os
    dois lados, onde os soldados lutavam a curta distancias rastejando por escombros, principalmente o lado soviético, já que Stalin havia declarado a Ordem número 227, "nenhum passo
    para trás", onde quem recuasse seria morto pelos seus próprio oficiais. E enquanto as forças do eixo estavam exaustas, o exercito soviético estava juntando do outro 
    lado do rio Volga forças para um ataque.
    <br> Então em novembro de 1942, se da inicio a Operação Urano, onde os soldados soviéticos cercaram o 6º exercito alemão em Stalingrado, levando a rendição de Friedrich Paulus
    no dia 30 de janeiro de 1943 recém condecorado Marechal por Hitler, em uma tentativa de fazer com que ele não se rendesse. Esse foi um dos grandes pontos de virada da Segunda 
    Guerra Mundial.
    <br> Em 1943 houveram varias batalhas, como a Invasão da Sílica pelos aliados, iniciada dia 10 de Julho, que levou o povo italiano a se rebelar e prender seu líder Benito 
    Mussolini que posteriormente foi liberto pelos alemães tendo assim criado um estado fantoche chamado de República Social Italiana. A batalha de Kursk foi a maior na qual envolveu
    tanques em toda a historia, sendo os alemães contra os soviéticos, do dia 5 de julho a 23 de agosto de 1943. E a guerra assim sucedeu durante todo esse período.
    <br> Há muito tempo os aliados planejavam uma invasão e libertação da França, ate que dia 6 de junho de 1944, onde Reino Unido, EUA e Canada iniciaram a maior invasão marítima da
    historia, o dia-D, onde mais de 160 mil soldados chegaram em Normandia pelas praias, e enfrentaram uma grande resistência alemã que estavam preparados pra enfrentar os aliados, 
    armados com a famosa MG-42, mas no fim do dia com uma baixa de mais de 10 mil soldados em comparação com os mais de 5 mil dos alemães, os aliados conseguiram avançar com a recua
    dos inimigos, sendo um marco na guerra da Europa ocidental.
    <br> A Alemanha já estava sendo pressionada em duas frentes e começou a perder seus territórios dominado na Europa e África, tentando uma forma desesperada conter as ofensivas
    inimigas. Enquanto isso os aliados ja estavam planejando como a Alemanha seria dividida. Dia 16 de Abril de 1945, os Soviéticos chegaram em Berlim.
    <br> No dia 20 de Abril, Mussolini deu sua ultima entrevista, e posteriormente foi capturado e morto no dia 28 pela resistência italiana, junto com sua acompanhante, 
    Clara Petacci. Seus corpos ficaram expostos para o publico expressar seu ódio, junto com outros lideres fascistas, a rendição foi italiana foi assinada em 29. Já no dia 30 de 
    Abril, Hitler e sua recém esposa, Eva Braun, se suicidaram em seu bunker, e foram queimados a mando do próprio, com isso Joseph Goebbels se tornou o novo Chanceler da Alemanha,
    acabou matando seus filhos e também se suicidou. No dia 2 a batalha de Berlim acaba, e dia 8 a guerra na Europa chega ao fim.
    <br> A batalha na Ásia ainda continua, com os aliados batalhando contra o Japão. Os lideres aliados entram em consenso que a solução para o Japão seria a destruição total. Tentaram
    negociar uma rendição mas o Japão não queria aceitar, então no dia 6 de Agosto de 1945, os EUA lançaram a primeira arma nuclear usada em um conflito, "Little Boy", contra a cidade 
    de Hiroshima, matando mais de 100 mil pessoas em segundos, e posteriormente causando sequelas aos sobreviventes. Mas mesmo assim, o Império Japonês não aceitou se render, então 
    no dia 9, apenas 3 dias após a primeira arma nuclear, "Fat Man" foi lançada conta a cidade de Nagasaki, matando mais de 80 mil, com isso o Japão se rende dia 15 de Agosto, e dia 
    2 de Setembro de 1945 foi oficialmente encerrada a Segunda Guerra Mundial.`);
    document.querySelector(`.imagem`).src=`./img/tropas.jpg`
});

document.getElementById(`consequencias`).addEventListener(`click`,function(){
    mudarTexto(`.paragrafo`,`Esse conflito que durou 6 anos foi o maior de toda a historia, tendo matado mais de 70 milhoes de pessoas e destruido boa parte da Europa. Alemanha foi 
    dividia em doi blocos, o capitalista e o comunista, sendo palco da Guerra fria, tendo ate o governo sivietico construido em 1961 um muro para impedir que a população da parte 
    oriental fugisse para a parte ocidental, só perdendo seu proposito em 1989 com a liberação da Alemanha pela bloco comunista.
    <br> As tecnologias alema foram tomadas pelos aliados, e usadas duarantes a Guerra Fria e principalmente na corrida espacial, com o projeto V-2, usado para criar os foguetes, e 
    ate mesmo cientistas capturados polos dois blocos que serviram como pesquisadores, seja para tecnologia militar ou espacial.`);
    document.querySelector(`.imagem`).src=`./img/reischtag.jpg`
})