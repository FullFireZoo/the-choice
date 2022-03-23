const moundir = player(100, 'moundir', 'red')
console.log(moundir);
const pnj = player(100, 'pnj', 'red')
let tabPlayer = []




function addPlayers(player) {
    tabPlayer.push(player)
}
addPlayers(moundir)
addPlayers(pnj)
console.log(tabPlayer);

function player (health, name, team){
    return {
        name, 
        health,
        team,
        isDead: false
    }
}

function trueOrFalse (){
    moundir.health -=50 
    ifDead(tabPlayer)
}
trueOrFalse()
trueOrFalse()


console.log(moundir);

function ifDead (array){
    for(let i=0; i<array.length; i++){
        if(array[i].health<= 0){array[i].isDead=true;}
    }
}
/** 1) choix de l'équipe: red (rien ne se passe) or yellow (-20 health, le jaune attire tout les moustiques vousvousetes déseché)
 * 
 *  2) chercher de la food: yes( /2 ) or no ( -20 health )
 * 
 *  3.1) gouter ou faire gouter les trouvailles: gouter(x2 en vie, vous etes un avenuturier agueri), faire gouter( pnj: 100health, playerhealth 0, vous etes généreux et ça va vous tuer)
 *  3.2) prendre la nourriture ou se laisser vivre: prendre (health 0, vous auriez du vous activé pour differencier la manioque d'une simple racine) laisse vivre (-20 health, vous etes le seul survivant economiser ses forces a été rentable)
 * */ 

const title = document.querySelector('h1')
const yes = document.getElementById('yes')
const no = document.getElementById('no')
const pregunta = document.querySelector('p')

let chemin = [
    { 
        question:'as-tu faim ?',
        yes:10, 
        no:20,
    },
    { 
        question:'veux-tu manger du singe ?',
        yes:120, 
        no:-120,

    },
    { 
        question:'veux-tu faire l"exercice de demain ?',
        yes:120, 
        no:-1209,

    }
]
function questions(num){
    pregunta.innerHTML = chemin[num].question
    console.log("salut", num);
    document.querySelector('div').addEventListener('click', (e) =>{
        if(e.target.innerText=='yes'){
            console.log(chemin[num].yes);
            // pregunta.innerHTML= chemin[num++].question;
            // questions(num++)
        } else {
            console.log(chemin[num].no);
            // pregunta.innerHTML= chemin[num++].question;
            
        }
        questions(num++)
    })

}

questions(0)

