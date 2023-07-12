const letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']

const animalsList=['Lion','Elephant','Snake','Tiger','Bear','Parrot','Ox','Chicken','Hipoppotamus','Camel','Chicken','Eagle']



const container= document.getElementById('container');
const hangmanDrawing= document.getElementById('hangmanDrawing');
const letterContainer=document.getElementById('letterContainer');
const choosenBtn= document.getElementById('chooseBtn');
const visionNone=document.getElementsByClassName('displayNone')
const categoryPara=document.getElementById('categoryPara')


const buttonAnimals= document.createElement('button');
buttonAnimals.innerText='Animals 🐯'
buttonAnimals.classList.add('mainButtons');
choosenBtn.append(buttonAnimals)

const buttonAnimals2= document.createElement('button');
buttonAnimals2.innerText='Plants 🌵'
buttonAnimals2.classList.add('mainButtons');
choosenBtn.append(buttonAnimals2)


function buttonsAnimals1 (){
    hangmanDrawing.classList.remove('displayNone');
    letterContainer.classList.remove('displayNone')
    buttonAnimals.classList.add('displayNone');
    buttonAnimals2.classList.add('displayNone');
    randomWord1()
    lineWordd();
    keyboard();
}

function buttonsAnimal2 (){
    hangmanDrawing.classList.remove('displayNone');
    letterContainer.classList.remove('displayNone')
    buttonAnimals.classList.add('displayNone');
    buttonAnimals2.classList.add('displayNone');
}

buttonAnimals.addEventListener('click',buttonsAnimals1)
buttonAnimals2.addEventListener('click',buttonsAnimal2)

let mistakes=0;
let emptyWord= [];
let randomWord;
let char;
let partialWord=[]
let letterindex;

function randomWord1(){
     randomWord=animalsList[Math.floor(Math.random()*animalsList.length)];
}
function lettersss(){
    for(let i=0;i<emptyWord.length;i++){
        letterindex=emptyWord[i].indexOf(letters[i])
        emptyWord[i]="_"
        emptyWord.join(' ')
    }
}

function lineWordd(){
     const wordContainer=document.createElement('div');
     wordContainer.id='wordContainer'
     const wordSpan=document.createElement('span');
     wordSpan.id='wordSpan'
        for (let i=0; i<randomWord.length; i++){
        //=========== It cuts the string in slices and every slice is replaced with _ and pushes those lines in the empty array;
            // char= randomWord[i].slice(i,i+1); 
            // char='_'                               
            // emptyWord+=" "+char
            emptyWord.push(randomWord[i])
            emptyWord.map(lettersss)
        };
       
    wordSpan.innerText=emptyWord
    wordSpan.style.fontSize='40px'
    hangmanDrawing.append(wordContainer);
    wordContainer.appendChild(wordSpan)
}


function keyboard(){
    for(let i=0; i<letters.length;i++){
        const buttonA= document.createElement('button');
        buttonA.innerText=letters[i];
        letterContainer.append(buttonA)
        buttonA.classList.add('letters')
        buttonA.id=`letter${letters[i]}`
        buttonA.addEventListener('click', buttonWorking)
        
    }
}         
            
    

function buttonWorking (){
    for(let i=0;i<letters.length;i++){
        let butA=document.getElementById(`letter${letters[i]}`)
        let choosenLetter=butA[i].innerText;
    for(let j=0;j<randomWord.length;j++){
        if(randomWord[j]=== choosenLetter) {
        emptyWord[j]=choosenLetter
        
            };
        }; 
    const wSpan=document.getElementById('wordSpan')  
    wSpan.innerText=emptyWord   
        }
    }
    




