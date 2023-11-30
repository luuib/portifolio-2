const mensagensDivertidas =
    {
        "Qual é o desastre natural que os cães mais odeiam?Fura-cão",
        "Qual é a peça de carro que é feita só no Egito? Os faraóis",
        "Por que os fantasmas são péssimos para contar mentiras? Porque são transparentes.",
        "O que e uma maconha errolada em um jornal? um Baseado em Fatos",
        "Qual é o lugar mais certo do Brasil? O sertão",
    }

    let botaoDivertido = document.getElementById("botaoDivetido")

    let mensagemDivertida = document.getElementById("mensagemDivertida")

    botaoDivertido.addEventListener('click', function(){
        //Math.floor(x) retorna o menor numero inteiro dentre o numero "x"
        //Math.random() retorna um numeor pseudo-aleatorio no intervalo
        const mensagemAleatoria = mensagemDivertida[Math.floor(Math.random() * mensagemDivertida.length)]
        
        mensagemDivertida.textContent = mensagemAleatoria
    })