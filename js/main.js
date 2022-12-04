const urlOpt =
    [
        "https://img.freepik.com/premium-photo/one-thousand-3d-illustration-golden-number-1-000-white-copy-space-right-hand-side-text_131956-45.jpg",
        "https://media.istockphoto.com/id/1183790559/vector/vector-red-heart-shape-emoticon-on-background.jpg?s=612x612&w=0&k=20&c=Ihona-SCSfCCQ5C1dc7f55lDzIs3J1j6advpSI8uAeE=",
        "https://png.pngtree.com/png-clipart/20220124/ourlarge/pngtree-hand-drawn-vector-cartoon-cherry-png-image_4270506.png",
        "https://ih1.redbubble.net/image.1930763322.7413/st,small,507x507-pad,600x600,f8f8f8.jpg",
        // "https://img.freepik.com/premium-vector/golden-coins-set-flat-gold-icon-economy-finance-money-concept-wealth-symbol-vector-illustration-isol_144920-932.jpg?w=2000"
    ]
let firstSlot = null;
let secondSlot = null;
let thirdSlot = null;

const btn1 = document.getElementById('btn-one');
const btn2 = document.getElementById('btn-two');
const btn3 = document.getElementById('btn-three');

const slot1 = document.getElementById('slot-one')
const slot2 = document.getElementById('slot-two')
const slot3 = document.getElementById('slot-three')

const h1El = document.querySelector('h1')
const coinsCh = document.querySelector('.coins')

let coinsEl = 100;
let timeStart =0;        

// /////////////////////////////////////////////////
function randNum() {
    firstSlot = Math.floor(Math.random() * urlOpt.length)
    secondSlot = Math.floor(Math.random() * urlOpt.length)
    thirdSlot = Math.floor(Math.random() * urlOpt.length)

    console.log(firstSlot)
    console.log(secondSlot)
    console.log(thirdSlot)
}

// function slotMv1(){
//     for(let i=0; i<4; i++){    
//         setTimeout(function(){ slot1.src=urlOpt[Math.floor(Math.random()*3)]}, timeStart);
//         timeStart = timeStart1 +300;
//     }
//     setTimeout(function(){ slot1.src = urlOpt[firstSlot]}, 1200);  
// }

// function slotMv2(){
//     for(let j=0; j<6; j++){
//         setTimeout(function(){ slot2.src=urlOpt[Math.floor(Math.random()*3)]}, timeStart);
//         timeStart = timeStart +300;
//     }
//     setTimeout(function(){ slot2.src = urlOpt[secondSlot]}, 1800);
// }
// function slotMv3(){
//     for(let k=0; k<8; k++){
//         setTimeout(function(){ slot3.src=urlOpt[Math.floor(Math.random()*3)]}, timeStart);
//         timeStart3 = timeStart3+300;
        
//         setTimeout(function(){console.log(urlOpt[Math.floor(Math.random()*3)])}, 900);
//         console.log('this is the third one')
//     }
//     setTimeout(function(){ slot3.src = urlOpt[thirdSlot]}, 2400);
// }

///////////////////////////////////////////////////////

// function slotMv1(){
//     for(let i=0; i<4; i++){    
        
//         // timeStart1 =0;        
//         // timeStart1 = timeStart1 +300;
//         // setTimeout(function(){ slot1.src=urlOpt[Math.floor(Math.random()*3)]}, 300);
//         setTimeout(function(){ console.log(urlOpt[Math.floor(Math.random()*3)])}, 300);
        
//         console.log('this is the first one')
//     }
//     setTimeout(function(){ slot1.src = urlOpt[firstSlot]}, 1200);  
// }
// function slotMv2(){

//     for(let j=0; j<6; j++){
        
//         // 1=0;
//         // timeStart2 = timeStart2+300;
//         setTimeout(function(){ console.log(urlOpt[Math.floor(Math.random()*3)])}, 600);
//         // setTimeout(function(){ slot2.src=urlOpt[Math.floor(Math.random()*3)]}, 600);
//         console.log('this is the second one')
//     }
//     setTimeout(function(){ slot2.src = urlOpt[secondSlot]}, 1800);
// }
// function slotMv3(){
    
//     for(let k=0; k<8; k++){
//         // timeStart3 =0;
//         // timeStart3 = timeStart3+300;
        
//         // setTimeout(function(){ slot3.src=urlOpt[Math.floor(Math.random()*3)]}, 900);
//         setTimeout(function(){console.log(urlOpt[Math.floor(Math.random()*3)])}, 900);
//         console.log('this is the third one')
//     }
//     setTimeout(function(){ slot3.src = urlOpt[thirdSlot]}, 2400);
// }
// function randomize (slot, time, customAnimation) {
//     setTimeout(slot.src=urlOpt[Math.floor(Math.random()*3)], time)
//     slot.classList.add(customAnimation)
// }

// function removeAnimation (){
//     slot3.classList.remove('fade-animation')
// }
function slotMv(){
    // randomize(slot1, 300)
    // randomize(slot1, 600)
    // randomize(slot1, 1100)
    setTimeout(function(){ slot1.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 300);
    setTimeout(function(){ slot1.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 600);
    setTimeout(function(){ slot1.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 1100);
    setTimeout(function(){ slot1.src = urlOpt[firstSlot]}, 1200);        

        
    // randomize(slot2, 300)
    // randomize(slot2, 600)
    // randomize(slot2, 900)
    // randomize(slot2, 1400)
    setTimeout(function(){ slot2.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 300);
    setTimeout(function(){ slot2.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 600);
    setTimeout(function(){ slot2.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 900);
    setTimeout(function(){ slot2.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 1400);
    setTimeout(function(){ slot2.src = urlOpt[secondSlot]}, 1500);

    // randomize(slot3, 300)
    // randomize(slot3, 600)
    // randomize(slot3, 900)
    // randomize(slot3, 1200)
    // randomize(slot3, 1500, 'fade-animation')
    // removeAnimation()
    
    setTimeout(function(){ slot3.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 300);
    setTimeout(function(){ slot3.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 600);
    setTimeout(function(){ slot3.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 900);
    setTimeout(function(){ slot3.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 1200);
    setTimeout(function(){ slot3.src=urlOpt[Math.floor(Math.random()*urlOpt.length)]}, 1500);
    setTimeout(function(){ slot3.src = urlOpt[thirdSlot]}, 1700);

    // slot3.classList.remove('fade-animation')
}

/////////////////////////////////////////////

btn1.addEventListener('click', function () {
    randNum()

    if (coinsEl >= 1) {
        slotMv();
        // slotMv1();
        // slotMv2();
        // slotMv3();

        if ((firstSlot === secondSlot) && (firstSlot === thirdSlot)) {
            if(firstSlot===0){
                coinsEl = coinsEl + 1000;
                setTimeout(function(){h1El.innerHTML = "Jackpot!!!"},1700);

            }
            
            else{
                coinsEl = coinsEl + 3;
                setTimeout(function(){h1El.innerHTML = "You win 3 coins"},1700);
            }
        }



        ///////////////////////////////
        else {
            coinsEl = coinsEl - 1;
            h1El.innerHTML = "Slot Machine"


        }
        setTimeout(function(){coinsCh.innerHTML = 'Total Coins: ' + coinsEl;}, 1700);
        console.log("total coins: " + coinsEl)
    } else {
        h1El.innerHTML = 'Not enough coins'
    }
});

///////////////////////////////////////////////
btn2.addEventListener('click', function () {
    randNum()


    if (coinsEl >= 5) {
        slotMv();

        // slot1.src = urlOpt[firstSlot]
        // slot2.src = urlOpt[secondSlot]
        // slot3.src = urlOpt[thirdSlot]

        if ((firstSlot === secondSlot) && (firstSlot === thirdSlot)) {
            coinsEl = coinsEl + 15;
            setTimeout(function(){h1El.innerHTML = "You win 15 coins"},1700);
        }
        else {
            coinsEl = coinsEl - 5;
            h1El.innerHTML = "Slot Machine"

        }
        setTimeout(function(){coinsCh.innerHTML = 'Total Coins: ' + coinsEl;}, 1700);
        console.log("total coins: " + coinsEl)
    }
    else {
        h1El.innerHTML = 'Not enough coins'
    }
});

//////////////////////////////////////////////////
btn3.addEventListener('click', function () {
    randNum()

    if (coinsEl >= 10) {
        slotMv();

        // slot1.src = urlOpt[firstSlot]
        // slot2.src = urlOpt[secondSlot]
        // slot3.src = urlOpt[thirdSlot]
        if ((firstSlot === secondSlot) && (firstSlot === thirdSlot)) {
            coinsEl = coinsEl + 30;
            setTimeout(function(){h1El.innerHTML = "You win 30 coins"},1700);
        } else {
            coinsEl = coinsEl - 10;
            h1El.innerHTML = "Slot Machine"
        }
        setTimeout(function(){coinsCh.innerHTML = 'Total Coins: ' + coinsEl;}, 1700);
        console.log("total coins: " + coinsEl)
    }
    else {
        h1El.innerHTML = 'Not enough coins'
    }
})

