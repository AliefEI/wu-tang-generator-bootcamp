//user will answer 5 questionaires, 1 section for each question. depending on what they answer they get the result of show(use array for result-- similar to tictactoe)-->>>> NOPEEEEE TO MANY ARRAYS and have to keep track with is with what
//OPTION 2: value like the card game (math.random?(nope)/something else?)
//result != to show--> make {random} name 
//random name could be adj with noun
//what to do: have eventListener for click on button, button would make function create name--> set 'name' from option with value, have a determining factor how name is made. how?

document.querySelector('#enter').addEventListener('click',getResult)

let result=document.querySelector('#result')

function getResult(){

    //set adj and noun as an array with list of value
    let adjective = ['Anal','Belligerant','big-Headed','Creepy', 'Cynical','Grotesque','Ignorant','Lazy', 'Pompous', 'Repulsive']

    let noun =['Saiyan','Human','Snorlax','Senpai','Titan','Rayquaza','Chi-chi','Parasyte','Eldian','Namekian','Android','Majin', 'Senpai']

    //give variable of option name and set a value
    let food=document.getElementById('food').value
    let power=document.getElementById('power').value
    let curse=document.getElementById('curse').value
    let editor=document.getElementById('codeEditor').value
    let nemesis=document.getElementById('nemesis').value

    
    //set adj equal to the an array with value from option of curse and codeEditor, then make a for loop to get value to set it to the adjective
    let adject=[curse,editor,power]
    console.log(adject)
    let sumOfAdj=0
    console.log('leo')
    for(let i=0; i<adject.length;i++){
    sumOfAdj+= Number(adject[i])
    console.log(sumOfAdj)
    }

    //set noun equal to the an array with value from option of food, power and Nemesis, then make a for loop to get value to set it to the noun
    let nounn=[food,power,nemesis,editor]
    //console.log(nounn)
    let sumOfNoun =0
    for(let i=0; i<nounn.length; i++){
    sumOfNoun+=Number(nounn[i])
    //console.log(nounn)
    }

    result.innerHTML=adjective[sumOfAdj]+" "+noun[sumOfNoun]
}
