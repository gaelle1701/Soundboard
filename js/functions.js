let touchA = document.getElementById('btn1');
let touchZ = document.getElementById('btn2');
let touchE = document.getElementById('btn3');
let touchR = document.getElementById('btn4');
let touchT = document.getElementById('btn5');
let touchY = document.getElementById('btn6');
let touchU = document.getElementById('btn7');
let touchI = document.getElementById('btn8');
let touchO = document.getElementById('btn9');


let sound1 = document.getElementById('sound1');
let sound2 = document.getElementById('sound2');
let sound3 = document.getElementById('sound3');
let sound4 = document.getElementById('sound4');
let sound5 = document.getElementById('sound5');
let sound6 = document.getElementById('sound6');
let sound7 = document.getElementById('sound7');
let sound8 = document.getElementById('sound8');
let sound9 = document.getElementById('sound9');


// tableau d'objets pour récupérer ts btn + son + key
let touchs = [
{element: touchA, key:'a', sound: sound1}, 
{element: touchZ, key:'z', sound: sound2}, 
{element: touchE, key:'e', sound: sound3},
{element: touchR, key:'r', sound: sound4},
{element: touchT, key:'t', sound: sound5},
{element: touchY, key:'y', sound: sound6},
{element: touchU, key:'u', sound: sound7},
{element: touchI, key:'i', sound: sound8},
{element: touchO, key:'o', sound: sound9}
];

// export fonction event keyDown => ajoute la class active + son 
export function onKeyDown(event) {

    // boucle pr parcourir le tableau et chaques objets
    for (let touch = 0; touch < touchs.length; touch++) {
        let currentTouch = touchs[touch] ;            //récupérer ts les éléments courants du tableau

        if(currentTouch.key === event.key) {         //condition pr récupérer la touche pressée
            currentTouch.element.classList.add('btn_active');
            currentTouch.sound.play();

            currentTouch.sound.addEventListener('ended', event => {      //enlève la class au stop du son
                currentTouch.element.classList.remove('btn_active');
            })
         }
    }
};


// export fonction event keyUp => enlève la class active + remet le son au début
export function onKeyUp(event) {

    for (let touch = 0; touch < touchs.length; touch++) {
        let currentTouch = touchs[touch];

        if(currentTouch.key === event.key) {
            currentTouch.sound.currentTime = 0;
        }
    }
};

// export function onClick(event) {

//     for (let touch = 0; touch < touchs.length; touch++) {
//         let currentTouch = touchs[touch] ;            
//         console.log(currentTouch.element);
//         console.log(event.element);
//         if(currentTouch.element === event.element) {


//             currentTouch.element.classList.add('btn_active');
//             currentTouch.sound.play();

//             currentTouch.sound.addEventListener('ended', event => {
//                 currentTouch.element.classList.remove('btn_active');
//             })
//         }
//     }
// };