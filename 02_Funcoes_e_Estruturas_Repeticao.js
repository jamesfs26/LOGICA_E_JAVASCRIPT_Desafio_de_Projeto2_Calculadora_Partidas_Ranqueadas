
calcularNivelHeroi("Rei Caveira", 91);

function calcularNivelHeroi(nomeHeroi, vitoriasObtidas) {
    let rankHeroi;
    
    for (let i = 1; i <= 6; i++) {
        switch (i) {
            case 1:
                if (vitoriasObtidas < 11) {
                    rankHeroi = "Ferro";
                    i = 7; // Força saída do loop
                }
                break;
            case 2:
                if (vitoriasObtidas >= 11 && vitoriasObtidas <= 20) {
                    rankHeroi = "Bronze";
                    i = 7;
                }
                break;
            case 3:
                if (vitoriasObtidas >= 21 && vitoriasObtidas <= 50) {
                    rankHeroi = "Prata";
                    i = 7;
                }
                break;
            case 4:
                if (vitoriasObtidas >= 51 && vitoriasObtidas <= 80) {
                    rankHeroi = "Ouro";
                    i = 7;
                }
                break;
            case 5:
                if (vitoriasObtidas >= 81 && vitoriasObtidas <= 100) {
                    rankHeroi = "Lendário";
                    i = 7;
                }
                break;
            case 6:
                if (vitoriasObtidas > 100) {
                    rankHeroi = "Imortal";
                    i = 7;
                }
                break;
        }
    }

    console.log(`O herói nomeado por ${nomeHeroi} obteve ${vitoriasObtidas} vitórias, esse feito lhe concedeu o título de ${rankHeroi}, sua jornada está quase no fim, falta muito pouco para ser o maior de todos.`);
}












