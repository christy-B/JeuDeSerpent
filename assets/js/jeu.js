
var canvas, ctx, audioVictoire, audioPerdre;
const canvasTaille = 600;
const tailleSerpent = 6;
var distanceX = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent;
var distanceY = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent;
var distanceNX = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent + 3;
var distanceNY = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent + 3;
var X = 0;
var Y = 0;
var score=0;
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
        ctx.fillRect(distanceX, distanceY, tailleSerpent, tailleSerpent);
        JeuSerpent.creerNourriture();
    },
    positionSerpent:()=>{
        distanceX += X * tailleSerpent;
        distanceY += Y * tailleSerpent;
        JeuSerpent.creerSerpent();
        JeuSerpent.fonctionPerte();
        JeuSerpent.fonctionManger();
    },
    deplacementSerpent:()=>{
        document.addEventListener("keydown", (event)=>{
            //console.log(event.key);
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

    fonctionPerte:()=>{
        if ((distanceX < 0 || distanceX > (canvasTaille - tailleSerpent)) || (distanceY < 0 || distanceY > (canvasTaille - tailleSerpent)) ) {
            audioPerdre.play();
            X = 0 ;
            Y = 0;
            distanceX = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent;
            distanceY = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent;
        }
    },
    fonctionManger:()=>{
        if (((distanceNX - 3) === distanceX) && ((distanceNY-3) === distanceY)) {
            audioVictoire.play();
            distanceNX = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent + 3;
            distanceNY = Math.trunc(Math.random() * (canvasTaille/tailleSerpent)) * tailleSerpent + 3;
            score += 5;
            let nouveauScore = document.getElementById('compteur');
            nouveauScore.innerHTML = score;
        }
    },
    fonctionMedia:()=>{
        audioVictoire = document.createElement("audio");
        audioVictoire.src = "/assets/media/mange.mp3";
        audioPerdre = document.createElement("audio");
        audioPerdre.src = "/assets/media/perdre.mp3";

    }

}