const letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
                 'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const letterChoose = document.querySelector('.letter-choose')

function createLetterButtons(){
    for (i=0; i < letters.length; i++){
        const createButton = document.createElement("BUTTON");
        createButton.innerText= `${letters[i]}`;
        createButton.className = "letter-button";
        createButton.style.backgroundColor ='#FFD966';
        createButton.style.borderRadius ='10px';
        createButton.style.margin ='2px';
        createButton.style.borderColor ='#FFD966';
        createButton.style.fontSize ='x-large';
        letterChoose.appendChild(createButton);
    }
}

async function getapi(url) {
    let wordOutput = document.querySelector(".word");
    let blankOutput = document.querySelector(".blank-output");
    wordOutput.style.fontSize = "x-large";
    url = await fetch("https://random-word-api.herokuapp.com/word?number=1");
    var data = await url.json();
    let blanks = [];
    for(let i=0; i<data[0].length; i++){
        blanks.push("_");
    }
    blankOutput.innerHTML = blanks.join(" ");

    document.querySelectorAll(".letter-button").forEach((button) => {
        const clickedLetter = this.textContent;
        button.addEventListener("click", () => {
            for(let i = 0; i< data[0].length; i++){
                if(data[i].includes(clickedLetter)){
                    blanks.push(clickedLetter);
                }
                else{
                    console.log(clickedLetter);
                }
            }
        })
    })
}
getapi();
createLetterButtons();