const urlOpt =
    [
        "https://img.freepik.com/premium-photo/one-thousand-3d-illustration-golden-number-1-000-white-copy-space-right-hand-side-text_131956-45.jpg",
        "https://media.istockphoto.com/id/1183790559/vector/vector-red-heart-shape-emoticon-on-background.jpg?s=612x612&w=0&k=20&c=Ihona-SCSfCCQ5C1dc7f55lDzIs3J1j6advpSI8uAeE=",
        "https://png.pngtree.com/png-clipart/20220124/ourlarge/pngtree-hand-drawn-vector-cartoon-cherry-png-image_4270506.png",
        "https://ih1.redbubble.net/image.1930763322.7413/st,small,507x507-pad,600x600,f8f8f8.jpg",
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
let timeStart = 0;

function randNum() {
    firstSlot = Math.floor(Math.random() * urlOpt.length)
    secondSlot = Math.floor(Math.random() * urlOpt.length)
    thirdSlot = Math.floor(Math.random() * urlOpt.length)

    console.log(firstSlot)
    console.log(secondSlot)
    console.log(thirdSlot)
}

function slotMv() {
    setTimeout(function () { slot1.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 400);
    setTimeout(function () { slot1.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 800);
    setTimeout(function () { slot1.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 1200);
    setTimeout(function () { slot1.src = urlOpt[firstSlot] }, 1600);

    setTimeout(function () { slot2.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 400);
    setTimeout(function () { slot2.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 800);
    setTimeout(function () { slot2.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 1200);
    setTimeout(function () { slot2.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 1600);
    setTimeout(function () { slot2.src = urlOpt[secondSlot] }, 2000);

    setTimeout(function () { slot3.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 400);
    setTimeout(function () { slot3.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 800);
    setTimeout(function () { slot3.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 1200);
    setTimeout(function () { slot3.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 1600);
    setTimeout(function () { slot3.src = urlOpt[Math.floor(Math.random() * urlOpt.length)] }, 2000);
    setTimeout(function () { slot3.src = urlOpt[thirdSlot] }, 2400);
}



btn1.addEventListener('click', function () {

    randNum()

    if (coinsEl >= 1) {

        slotMv();

        if ((firstSlot === secondSlot) && (firstSlot === thirdSlot)) {
            if (firstSlot === 0) {
                coinsEl = coinsEl + 1000;
                setTimeout(function () { h1El.innerHTML = "Jackpot!!!" }, 2400);

            } else {
                coinsEl = coinsEl + 3;
                setTimeout(function () { h1El.innerHTML = "You win 3 coins" }, 2400);
            }
        } else {
            coinsEl = coinsEl - 1;
            h1El.innerHTML = "Slot Machine"


        }
        setTimeout(function () { coinsCh.innerHTML = 'Total Coins: ' + coinsEl; }, 2400);
        console.log("total coins: " + coinsEl)
    } else {
        h1El.innerHTML = 'You lose'
    }
});

btn2.addEventListener('click', function () {

    randNum()

    if (coinsEl >= 5) {

        slotMv();

        if ((firstSlot === secondSlot) && (firstSlot === thirdSlot)) {
            if (firstSlot === 0) {
                coinsEl = coinsEl + 1000;
                setTimeout(function () { h1El.innerHTML = "Jackpot!!!" }, 2400);
            } else {

                coinsEl = coinsEl + 15;
                setTimeout(function () { h1El.innerHTML = "You win 15 coins" }, 2400);
            }
        } else {
            coinsEl = coinsEl - 5;
            h1El.innerHTML = "Slot Machine"

        }
        setTimeout(function () { coinsCh.innerHTML = 'Total Coins: ' + coinsEl; }, 2400);
        console.log("total coins: " + coinsEl)
    } else {
        h1El.innerHTML = 'Not enough coins'
    }
});

btn3.addEventListener('click', function () {
    randNum()

    if (coinsEl >= 10) {

        slotMv();

        if ((firstSlot === secondSlot) && (firstSlot === thirdSlot)) {
            if (firstSlot === 0) {
                coinsEl = coinsEl + 1000;
                setTimeout(function () { h1El.innerHTML = "Jackpot!!!" }, 2400);
            }

            else {
                coinsEl = coinsEl + 30;
                setTimeout(function () { h1El.innerHTML = "You win 30 coins" }, 2400);
            }
        } else {
            coinsEl = coinsEl - 10;
            h1El.innerHTML = "Slot Machine"
        }
        setTimeout(function () { coinsCh.innerHTML = 'Total Coins: ' + coinsEl; }, 2400);
        console.log("total coins: " + coinsEl)
    }
    else {
        h1El.innerHTML = 'Not enough coins'
    }
})

