import { JeuSerpent } from "./jeu.js";
JeuSerpent.fonctionMedia();
JeuSerpent.fonctionCanvas();
JeuSerpent.creerSerpent();
JeuSerpent.deplacementSerpent();
setInterval(JeuSerpent.positionSerpent, 120);
