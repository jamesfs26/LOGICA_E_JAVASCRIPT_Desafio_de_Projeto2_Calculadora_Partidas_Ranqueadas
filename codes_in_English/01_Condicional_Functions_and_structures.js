// Ranked Matches Calculator:

calculateHeroRank("Chronicle Wizard", 62)

function calculateHeroRank(heroName, victoriesObtained, heroRank){
    
    if (victoriesObtained < 11) {
        heroRank = "Iron" 
    }
    else if (victoriesObtained >= 11 && victoriesObtained <= 20) {
        heroRank = "Bronze"
    } 
    else if (victoriesObtained >= 21 && victoriesObtained <= 50) {
        heroRank = "Silver"
    } else if (victoriesObtained >= 51 && victoriesObtained <= 80) {
        heroRank = "Gold"
    } else if (victoriesObtained >= 81 && victoriesObtained <= 100) {
        heroRank = "Legendary"
    }
    else{victoriesObtained > 100
        heroRank = "Immortal"
    }

    console.log(`The hero named ${heroName} has achieved ${victoriesObtained} victories, this feat has granted them the title of ${heroRank}, however their journey is not over yet, there are many challenges ahead to reach the top.`)
}