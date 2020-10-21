// Alexandre -> what is a callback 

const message = function () {
    console.log("Deve ser disparada daqui 3segundos")
}


setTimeout(message, 3000)

function setTimoteo(callback, tempo) {
    // ligar timer
    // setar timer para rodar encima da variavel tempo // 3segundos
    // apos passar 3 segundos
    // executa callback
    callback()
}