
const btn = document.querySelector('.btn');
const box = document.querySelector('.box-names');
const boxCezar = document.querySelector('.box-cezar');

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetTab = alphabet.split("");

function moveAlphabet(x,alphabet){

    const movedAplhabet = [];
    for(let i=0;i<alphabetTab.length;i++){
        movedAplhabet[i] = alphabet[(i+x)%alphabet.length];
    }
    return movedAplhabet;
}

function reverseString(string){
    return string.split("").reverse().join("");
}

function Cezar(string,enAlphabet){
    let encryptedWord = [];
    for(let i=0; i<string.length; i++){
        for(let j =0; j<alphabetTab.length; j++){
            if(string[i] === alphabetTab[j]){
                encryptedWord.push(enAlphabet[j]);
            }
        }
    }
    return encryptedWord.join("")
}

btn.addEventListener('click',()=>{

    //pobieranie wartości
    const firstName = document.querySelector('[name="firstName"]').value.toLowerCase();
    const lastName = document.querySelector('[name="lastName"]').value.toLowerCase();
    const move = Number(document.querySelector('[name="moveAplhabet"]').value)
    
    box.innerHTML = "imie: " + reverseString(firstName) + " nazwisko: " + reverseString(lastName);

    const enAlphabet = moveAlphabet(move,alphabet);
    boxCezar.innerHTML = "Encoded word: " + Cezar(firstName,enAlphabet)
})


/*imie = "Marcin1";
nazwisko = "Mika";


{
let imie = "marcin2";  // let dziedziczy tylko w obiekcie 
console.log(imie);
}

console.log(imie);
*/
