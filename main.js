// variáveis
const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "O riso é a menor distância entre duas pessoas.",
  "Os defeitos são mais fortes quando o amor é fraco.",
  "Amizade e Amor são coisas que se unem num piscar de olhos.",
  "Surpreender e ser surpreendido é o segredo do amor.",
  "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
  "A paciência na adversidade é sinal de um coração sensível.",
  "A sorte favorece a mente bem preparada.",
  "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.",
  "Quem olha para fora sonha; quem olha para dentro acorda.",
  "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.",
  "Realize o óbvio, pense no improvável e conquiste o impossível.",
  "Você sempre será a sua melhor companhia!",
  "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..",
  "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",
  "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.",
  "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
  "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna",
  "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.",
  "E a paz de Deus, que excede todo o entendimento, guardará os seus corações e as suas mentes em Cristo Jesus.",
  "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
  "Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
  "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo",
  "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
  "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
  "Tudo posso naquele que me fortalece.",
  "Portanto, não se preocupem com o amanhã, pois o amanhã trará as suas próprias preocupações. Basta a cada dia o seu próprio mal.",
  "Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós?",
  "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe.",
]
const screenOne = document.querySelector(".screen-one")
const screenTwo = document.querySelector(".screen-two")
const openCookie = document.querySelector("#open-cookie")
const openAnotherCookie = document.querySelector("#open-another-cookie")
const luckyPhrase = document.querySelector("#phrases")

// eventos
openCookie.addEventListener("click", luck)
openAnotherCookie.addEventListener("click", toggleScreen)
document.addEventListener("keydown", keydown)

// funciton
function luck() {
  toggleScreen()

  let numberLuck = Math.round(Math.random() * 50)
  luckyPhrase.innerText = phrases[numberLuck]
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

function keydown(e) {
  if (e.key == "Enter") {
    luck()
  }
}
