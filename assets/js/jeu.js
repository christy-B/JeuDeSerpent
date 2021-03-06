
var canvas, ctx, audioVictoire, audioPerdre;
const canvasTaille = 500;
const tailleSerpent = 6;
var distanceX = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent;
var distanceY = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent;
var distanceNX = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent + 3;
var distanceNY = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent + 3;
var X = 0;
var Y = 0;
var score=0;
document.getElementById('compteur').innerHTML = score;
document.getElementById("in").value = score;
var corpsSerpent = [];
var tailleCorpsSerpent = 20;
export const JeuSerpent = {
    fonctionCanvas:() =>{
        canvas = document.getElementById('canvas');
        canvas.width = canvasTaille;
        canvas.height = canvasTaille;
        ctx = canvas.getContext('2d');
    },
    creerSerpent:()=>{
        ctx.fillStyle = 'green';
        ctx.clearRect(0,0,canvasTaille,canvasTaille);
        if (X !== 0 || Y !== 0 || corpsSerpent.length === 0) {
            corpsSerpent.push({distanceX, distanceY});
            if (corpsSerpent.length > tailleCorpsSerpent) {
                corpsSerpent.shift();
            }
        }
        
        corpsSerpent.forEach(body => {
            ctx.fillRect(body.distanceX, body.distanceY, tailleSerpent, tailleSerpent);
        });
        
        JeuSerpent.creerNourriture();
    },
    positionSerpent:()=>{
        distanceX += X * tailleSerpent;
        distanceY += Y * tailleSerpent;
        JeuSerpent.creerSerpent();
        JeuSerpent.fonctionTouche();
    },
    deplacementSerpent:()=>{
        document.addEventListener("keydown", (event)=>{
            switch (event.key) {
                case "ArrowUp":
                    X = 0;
                    Y = -1;
                    break;
                case "ArrowDown":
                    X = 0;
                    Y = 1;
                    break;
                    case "ArrowLeft":
                        X = -1;
                        Y = 0;
                        break;
                    case "ArrowRight":
                        X = 1;
                        Y = 0;
                        break;
                        case " ":
                        X = 0;
                        Y = 0;
                        break;
                default:
                    break;
            }
        })
    },
    creerNourriture:()=>{
        ctx.beginPath();
        ctx.arc(distanceNX, distanceNY, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.closePath();
    },
    elementPerte:()=>{
        audioPerdre.play();
        X = 0 ;
        Y = 0;
        corpsSerpent=[];
        distanceX = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent;
        distanceY = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent;
        document.getElementById("btn-reload").style.display = "block";
    },
    elementGain:()=>{
        audioVictoire.play();
        distanceNX = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent + 3;
        distanceNY = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent + 3;
        score += 5;
        tailleCorpsSerpent += 2;
        let nouveauScore = document.getElementById('compteur');
        nouveauScore.innerHTML = score;
        let inputscore = document.getElementById("in");
        inputscore.value = score;
    },
    fonctionTouche:()=>{
        if ((distanceX < 0 || distanceX > (canvasTaille - tailleSerpent)) || (distanceY < 0 || distanceY > (canvasTaille - tailleSerpent)) ) {
            JeuSerpent.elementPerte();
        }else if(((distanceNX - 3) === distanceX) && ((distanceNY-3) === distanceY)) {
            JeuSerpent.elementGain();
        }
        for (let index = 0; index < corpsSerpent.length-1; index++) {
            const body = corpsSerpent[index];
            const teteSerpent = corpsSerpent[corpsSerpent.length-1];
            if (body.distanceX == teteSerpent.distanceX && body.distanceY == teteSerpent.distanceY) {
                JeuSerpent.elementPerte();
                break;
            }
        }
    },
    fonctionMedia:()=>{
        audioVictoire = document.createElement("audio");
        audioVictoire.src = "assets/media/mange.mp3";
        audioPerdre = document.createElement("audio");
        audioPerdre.src = "assets/media/perdre.mp3";

    }

}