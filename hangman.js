const lettersList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']

const animalsList=['Lion','Elephant','Snake','Tiger','Bear','Parrot','Ox','Chicken','Hipoppotamus','Camel','Chicken','Eagle']

const veggieList=['Monstera','Cucumber','Tomato','Orange','Ficus','Tulip','Corn','Cactus','Cabage','Rose']



const container= document.getElementById('container');
const hangmanDrawing= document.getElementById('hangmanDrawing');
const letterContainer=document.getElementById('letterContainer');
const choosenBtn= document.getElementById('chooseBtn');
const visionNone=document.getElementsByClassName('displayNone');
const categoryPara=document.getElementById('categoryPara');
const gameImg=document.getElementById('gameImg');
const heading1=document.getElementById('heading1');
const homeBtn=document.getElementById('homeBtn')
const resetBtn=document.getElementById('resetBtn');
const gameWord=document.createElement('div');





const buttonAnimals= document.createElement('button');
buttonAnimals.innerText='Animals 🐯'
buttonAnimals.classList.add('mainButtons');
choosenBtn.append(buttonAnimals)

const buttonsVeggie= document.createElement('button');
buttonsVeggie.innerText='Plants 🌵'
buttonsVeggie.classList.add('mainButtons');
choosenBtn.append(buttonsVeggie)


function buttonsAnimals1 (){
    resetBtn.classList.remove('displayNone')
    homeBtn.classList.remove('displayNone');
    hangmanDrawing.classList.remove('displayNone');
    letterContainer.classList.remove('displayNone')
    gameImg.classList.remove('displayNone');
    buttonAnimals.classList.add('displayNone');
    buttonsVeggie.classList.add('displayNone');
    categoryPara.classList.add('displayNone');
    heading1.innerText='Animals Category 🦊'
    randomwordd()
    wordDisplay()
    createButtons1()
    
}

function buttonsVeggie1 (){
    resetBtn.classList.remove('displayNone')
    homeBtn.classList.remove('displayNone');
    hangmanDrawing.classList.remove('displayNone');
    letterContainer.classList.remove('displayNone')
    gameImg.classList.remove('displayNone');
    buttonAnimals.classList.add('displayNone');
    buttonsVeggie.classList.add('displayNone');
    categoryPara.classList.add('displayNone');
    heading1.innerText='Veggie Category 🏵️'
    randomworddVeggie()
    wordDisplayVeggie()
    createButtons2()
}

buttonAnimals.addEventListener('click',buttonsAnimals1)
buttonsVeggie.addEventListener('click',buttonsVeggie1)
resetBtn.addEventListener('click', resetPage)
homeBtn.addEventListener('click',homePage)

let randomAnimal='';
let randomVeggie=''
let wrongAnswer=1;
let maxWrongAnswer=7;
let gameLetter=[];
let choice=[];
let letterButton='';
let letter;

//?-------------Animal list section
function randomwordd(){
    
   let uppercaseAnimal=animalsList[Math.floor(Math.random()*animalsList.length)];
    randomAnimal=uppercaseAnimal.toUpperCase()
};




function createButtons1(){
    for(let i=0;i<lettersList.length;i++){
        let buttonAZ=document.createElement('div')
        letter=lettersList[i];
        buttonAZ.innerHTML=`<button id="${letter}" class="lettersBtn" onclick="pickedLetter('${letter}')"> ${letter}</button>`;
        letterContainer.append(buttonAZ)
    }
}





function pickedLetter(pickedLtr){
    document.getElementById(pickedLtr).disabled= true;
    if (randomAnimal.includes(pickedLtr)) {
        for (let i = 0; i < randomAnimal.length; i++) {
          if (randomAnimal[i] === pickedLtr) {
            gameLetter[i] = pickedLtr;
          }
        }
        gameWord.innerHTML = gameLetter.join('');
      } else {
        wrongAnswer += 1;
        document.getElementById('hangmanPainting').innerHTML=`<img src="img/hangman${wrongAnswer}.png" id="gameImg">`
      }
    if (gameWord.innerHTML===randomAnimal){
        alert(`You won, the word was ${randomAnimal}`)
        setTimeout(()=> {window.location.assign('index.html')},2000)
    }else if(wrongAnswer===maxWrongAnswer){
        alert(`You lost, the word was ${randomAnimal}`)
        window.location.assign('index.html')
    }
}


function wordDisplay(){
    for (let i=0;i<randomAnimal.length; i++){
        let randomLetters=randomAnimal.split(i,i+1);
        randomLetters= ' _'
        gameLetter.push(randomLetters)
    }
        gameWord.innerHTML= gameLetter.join('');
        gameWord.style.fontSize='40px'
        gameWord.style.borderTop='1px solid black'
        hangmanDrawing.append(gameWord)
}

function resetPage(){
    window.location.reload()
}

function homePage(){
    window.location.assign('index.html')
}



//?-----------Veggie list section
function createButtons2(){
    for(let i=0;i<lettersList.length;i++){
        let buttonAZ=document.createElement('div')
        letter=lettersList[i];
        buttonAZ.innerHTML=`<button id="${letter}" class="lettersBtn" onclick="pickedLetterVeggie('${letter}')"> ${letter}</button>`;
        letterContainer.append(buttonAZ)
    }
}

function randomworddVeggie(){
    let uppercaseVeggie=veggieList[Math.floor(Math.random()*veggieList.length)];
    randomVeggie=uppercaseVeggie.toUpperCase()
 };

function wordDisplayVeggie(){
    for (let i=0;i<randomVeggie.length; i++){
        let randomLetters=randomVeggie.split(i,i+1);
        randomLetters= ' _'
        gameLetter.push(randomLetters)
    }
    gameWord.innerHTML= gameLetter.join('');
    gameWord.style.fontSize='40px'
    gameWord.style.borderTop='1px solid black'
    hangmanDrawing.append(gameWord)
}

 function pickedLetterVeggie(pickedLtr){
    document.getElementById(pickedLtr).disabled= true;
    if (randomVeggie.includes(pickedLtr)) {
        for (let i = 0; i < randomVeggie.length; i++) {
          if (randomVeggie[i] === pickedLtr) {
            gameLetter[i] = pickedLtr;
          }
        }
        gameWord.innerHTML = gameLetter.join('');
      } else {
        wrongAnswer += 1;
        document.getElementById('hangmanPainting').innerHTML=`<img src="img/hangman${wrongAnswer}.png" id="gameImg">`
      }
    if (gameWord.innerHTML===randomVeggie){
        alert(`You won, the word was ${randomVeggie}`)
        setTimeout(()=> {window.location.assign('index.html')},2000)
    }else if(wrongAnswer===maxWrongAnswer){
        alert(`You lost, the word was ${randomVeggie}`)
        window.location.assign('index.html')
    }
}

