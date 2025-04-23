// Version with for + switch (no arrays/objects)
calculateHeroRank("Skull King", 91);

function calculateHeroRank(heroName, victoriesObtained) {
    let heroRank;
    
    for (let i = 1; i <= 6; i++) {
        switch (i) {
            case 1:
                if (victoriesObtained < 11) {
                    heroRank = "Iron";
                    i = 7; // Force loop exit
                }
                break;
            case 2:
                if (victoriesObtained >= 11 && victoriesObtained <= 20) {
                    heroRank = "Bronze";
                    i = 7;
                }
                break;
            case 3:
                if (victoriesObtained >= 21 && victoriesObtained <= 50) {
                    heroRank = "Silver";
                    i = 7;
                }
                break;
            case 4:
                if (victoriesObtained >= 51 && victoriesObtained <= 80) {
                    heroRank = "Gold";
                    i = 7;
                }
                break;
            case 5:
                if (victoriesObtained >= 81 && victoriesObtained <= 100) {
                    heroRank = "Legendary";
                    i = 7;
                }
                break;
            case 6:
                if (victoriesObtained > 100) {
                    heroRank = "Immortal";
                    i = 7;
                }
                break;
        }
    }

    console.log(`The hero named ${heroName} has achieved ${victoriesObtained} victories, this feat has granted them the title of ${heroRank}, their journey is almost at an end, just a little more to become the greatest of all.`);
}