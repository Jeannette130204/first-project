const urlOpt =
    ["https://media.istockphoto.com/id/1183790559/vector/vector-red-heart-shape-emoticon-on-background.jpg?s=612x612&w=0&k=20&c=Ihona-SCSfCCQ5C1dc7f55lDzIs3J1j6advpSI8uAeE=",
        "https://png.pngtree.com/png-clipart/20220124/ourlarge/pngtree-hand-drawn-vector-cartoon-cherry-png-image_4270506.png",
        "https://ih1.redbubble.net/image.1930763322.7413/st,small,507x507-pad,600x600,f8f8f8.jpg"
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

const total = document.getElementById('total-coins')
const h1El = document.querySelector('h1')
const coinsCh = document.querySelector('.coins')

let coinsEl = 100;
// /////////////////////////////////////////////////
function randNum() {
    firstSlot = Math.floor(Math.random() * 3)
    secondSlot = Math.floor(Math.random() * 3)
    thirdSlot = Math.floor(Math.random() * 3)

    console.log(firstSlot)
    console.log(secondSlot)
    console.log(thirdSlot)
}

/////////////////////////////////////////////

btn1.addEventListener('click', function () {
    randNum()

    // const slot2 = document.getElementById('slot-two')
    // const slot3 = document.getElementById('slot-three')
    // slot1.src = urlOpt[Math.floor(Math.random() * 3)]
    // slot2.src = urlOpt[Math.floor(Math.random() * 3)]
    // slot3.src = urlOpt[Math.floor(Math.random() * 3)]

    if (coinsEl >= 1) {

        slot1.src = urlOpt[firstSlot]
        slot2.src = urlOpt[secondSlot]
        slot3.src = urlOpt[thirdSlot]

        if ((firstSlot === secondSlot) && (firstSlot === thirdSlot)) {
            coinsEl = coinsEl + 3;
            h1El.innerHTML = "You win 3 coins"
        }
        else {
            coinsEl = coinsEl - 1;
            h1El.innerHTML = "Slot Machine"


        }
        coinsCh.innerHTML = 'Total Coins: ' + coinsEl;
        console.log("total coins: " + coinsEl)
    } else {
        h1El.innerHTML = 'Not enough coins'
    }
});
///////////////////////////////////////////////
btn2.addEventListener('click', function () {
    randNum()

    if (coinsEl >= 5) {
        slot1.src = urlOpt[firstSlot]
        slot2.src = urlOpt[secondSlot]
        slot3.src = urlOpt[thirdSlot]
        if ((firstSlot === secondSlot) && (firstSlot === thirdSlot)) {
            coinsEl = coinsEl + 15;
            h1El.innerHTML = "You win 15 coins"
        }
        else {
            coinsEl = coinsEl - 5;
            h1El.innerHTML = "Slot Machine"

        }
        coinsCh.innerHTML = 'Total Coins: ' + coinsEl;
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
        slot1.src = urlOpt[firstSlot]
        slot2.src = urlOpt[secondSlot]
        slot3.src = urlOpt[thirdSlot]
        if ((firstSlot === secondSlot) && (firstSlot === thirdSlot)) {
            coinsEl = coinsEl + 30;
            h1El.innerHTML = "You win 30 coins"
        } else {
            coinsEl = coinsEl - 10;
            h1El.innerHTML = "Slot Machine"
        }
        coinsCh.innerHTML = 'Total Coins: ' + coinsEl;
        console.log("total coins: " + coinsEl)
    }
    else {
        h1El.innerHTML = 'Not enough coins'
    }
})



// function randomImage(){
//     firstSlot=Math.floor(Math.random()*4)
//     secondSlot=Math.floor(Math.random()*4)
//     thirdSlot=Math.floor(Math.random()*4)

//     console.log(firstSlot)
//     console.log(secondSlot)
//     console.log(thirdSlot)

// }

