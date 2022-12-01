// let firstSlot=null;
// let secondSlot=null;
// let thirdSlot=null;
// let userInput="play";
// // let playing = 'stop';

// let currentCoins = 10;

// if(userInput==="play"){
// while(currentCoins !== 0){
//     firstSlot=Math.floor(Math.random()*10); 
//     secondSlot=Math.floor(Math.random()*10);
//     thirdSlot=Math.floor(Math.random()*10);
// if((firstSlot===secondSlot) && (firstSlot===thirdSlot)){
//     if(firstSlot<4){
//         currentCoins=currentCoins++;
//     }
//     else if(firstSlot<8){
//         currentCoins=currentCoins+2;
//     }
//     else{
//         currentCoins=currentCons+3;
//     }
// }
// else{
//     currentCoins=currentCoins-1;
// }
// console.log(firstSlot, secondSlot, thirdSlot)
// console.log(currentCoins)
// break;
// }}
// else{
//     console.log("GoodBye!")
// }
urlOpt=
["https://media.istockphoto.com/id/1183790559/vector/vector-red-heart-shape-emoticon-on-background.jpg?s=612x612&w=0&k=20&c=Ihona-SCSfCCQ5C1dc7f55lDzIs3J1j6advpSI8uAeE=",
    "https://png.pngtree.com/png-clipart/20220124/ourlarge/pngtree-hand-drawn-vector-cartoon-cherry-png-image_4270506.png",
    "https://ih1.redbubble.net/image.1930763322.7413/st,small,507x507-pad,600x600,f8f8f8.jpg"
]
const btn1 = document.getElementById('btn-one');
const btn2 = document.getElementById('btn-two');
const btn3 = document.getElementById('btn-three');


const total = document.getElementById('total-coins')


let coinsEl = 100;
total.innerText = coinsEl
console.log(coinsEl);

let firstSlot = null;
let secondSlot= null;
let thirdSlot=null;




function randNum(){
    firstSlot=Math.floor(Math.random()*3)
    secondSlot=Math.floor(Math.random()*3)
    thirdSlot=Math.floor(Math.random()*3)

}

function textCh(){
    const slot1 = document.getElementById('slot-one')

    if(firstSlot===1){
        slot1.src = urlOpt[0];
    }
    else if(firstSlot===2){
        slot1.src = urlOpt[1];
    }
    else{
        slot1.src = urlOpt[2];
    }
}


btn1.addEventListener('click', function(){
    // randNum();
    // textCh();
    slot1.src = urlOpt[Math.floor(Math.random() * 3)]


    const slot1 = document.getElementById('slot-one')
    const slot2 = document.getElementById('slot-two')
    const slot3 = document.getElementById('slot-three')
    slot1.src = urlOpt[Math.floor(Math.random() * 3)]
    slot2.src = urlOpt[Math.floor(Math.random() * 3)]
    slot3.src = urlOpt[Math.floor(Math.random() * 3)]


    if((firstSlot===secondSlot)&&(firstSlot===thirdSlot)){
        coinsEl=coinsEl+3;
    }
    else{
        coinsEl = coinsEl - 1;
    }
    console.log(firstSlot)
    console.log(secondSlot)
    console.log(thirdSlot)
    console.log("total coins: " + coinsEl)
});

btn2.addEventListener('click', function(){
    
    randNum();
    textCh();
    
    if((firstSlot===secondSlot)&&(firstSlot===thirdSlot)){
        coinsEl=coinsEl+15;
    }
    else{
        coinsEl = coinsEl - 5;
    }
    console.log(firstSlot)
    console.log(secondSlot)
    console.log(thirdSlot)
    console.log("total coins: " + coinsEl)
});


btn3.addEventListener('click', function(){
    
    randNum();
    textCh();
    
    thirdSlot=Math.floor(Math.random()*4)
    if((firstSlot===secondSlot)&&(firstSlot===thirdSlot)){
        coinsEl=coinsEl+30;
    }
    else{
        coinsEl = coinsEl - 10;
    }
    console.log(firstSlot)
    console.log(secondSlot)
    console.log(thirdSlot)
    console.log("total coins: " + coinsEl)
})



// function randomImage(){
//     firstSlot=Math.floor(Math.random()*4)
//     secondSlot=Math.floor(Math.random()*4)
//     thirdSlot=Math.floor(Math.random()*4)

//     console.log(firstSlot)
//     console.log(secondSlot)
//     console.log(thirdSlot)

// }

