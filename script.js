const input = document.getElementById("inputField");
const output = document.getElementById("output");

function findCharacter(element){
    return(element.Character == this.toLowerCase()); //element.character is somwhow a while this is somehow "a"
}

function converToMorse(x){
    const morseCharacters = [
        {Character: "a", code: "*-"},
        {Character: "b", code: "-***"},
        {Character: "c", code: "-*-*"},
        {Character: "d", code: "-**"},
        {Character: "e", code: "*"},
        {Character: "f", code: "**-*"},
        {Character: "g", code: "--*"},
        {Character: "h", code: "****"},
        {Character: "i", code: "**"},
        {Character: "j", code: "*---"},
        {Character: "k", code: "-*-"},
        {Character: "l", code: "*-**"},
        {Character: "m", code: "--"},
        {Character: "n", code: "-*"},
        {Character: "o", code: "---"},
        {Character: "p", code: "*--*"},
        {Character: "q", code: "--*-"},
        {Character: "r", code: "*-*"},
        {Character: "s", code: "***"},
        {Character: "t", code: "-"},
        {Character: "u", code: "**-"},
        {Character: "v", code: "***-"},
        {Character: "w", code: "*--"},
        {Character: "x", code: "-**-"},
        {Character: "y", code: "-*--"},
        {Character: "z", code: "--**"},
        {Character: " ", code: "        "},
        {Character: "\n", code: "<br>"},
    ];

    let character = morseCharacters.find(findCharacter,x); 

    if(character === undefined){return("x")};

    return (character.code);
}

function readAndDisplay(){
   

    const userinput = input.value;
    const characterArray = userinput.split("");
    const morseArray = characterArray.map(converToMorse);
    const displayOutput = "   " + morseArray.join("   ");

    output.innerHTML = displayOutput;
}

input.addEventListener("input",readAndDisplay);