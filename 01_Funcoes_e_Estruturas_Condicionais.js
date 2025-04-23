
// Calculadora de Partidas Rankeadas:

calcularNivelHeroi("Mago das Cronicas", 62)

function calcularNivelHeroi(nomeHeroi, vitoriasObtidas, rankHeroi){
    
    if (vitoriasObtidas < 11) {
        rankHeroi = "Ferro" 
    }
    else if (vitoriasObtidas >= 11 && vitoriasObtidas <= 20) {
    rankHeroi = "Bronze"
    } 
    else if (vitoriasObtidas >= 21 && vitoriasObtidas <= 50) {
        rankHeroi = "Prata"
    } else if (vitoriasObtidas >= 51 && vitoriasObtidas <= 80) {
        rankHeroi = "Ouro"
    } else if (vitoriasObtidas >= 81 && vitoriasObtidas <= 100) {
        rankHeroi = "Lendario"
    }
    else{vitoriasObtidas > 100
        rankHeroi = "Imortal"
    }

    console.log(`O heroi nomeado por ${nomeHeroi} obteve ${vitoriasObtidas} vitorias, esse feito lhe concedeu o titulo de ${rankHeroi}, entretanto sua jornada ainda não terminou, há muitos desafios até o topo.`)
}

