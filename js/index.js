//importe les différentes fonctions
import {onKeyDown, onKeyUp, onClick } from "./functions"

// ajoute les évènements correspondants aux fonctions appelées (callback) => sans (), ni paramètre
document.addEventListener('keydown', onKeyDown);  
document.addEventListener('keyup', onKeyUp);
// document.addEventListener('click', onClick);