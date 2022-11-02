document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]
    const board = document.querySelector('.board')
    cardsArray.sort(() => 0.5 - Math.random())

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = []
    function creatBoard() {
        for (let i = 0; i < cardsArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);

        }

    }


    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);
        console.log(cardsChosen)

        const firstImgId = cardsChosenId[0]
        const secondImgId = cardsChosenId[1]

        const firstImg = cardsChosen[0]
        const secondImg = cardsChosen[1]


        console.log(firstImgId)
        console.log(secondImgId)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 400);

        }
        const result = document.querySelector('#result')

        function checkForMatch() {
            cards = document.querySelectorAll('img')
            if (firstImgId === secondImgId) {
                console.log('this is the same image!!!')
                cards[firstImgId].setAttribute('src', 'images/blank.png');
                cards[secondImgId].setAttribute('src', 'images/blank.png');
            } else if (firstImg === secondImg) {

                cards[firstImgId].setAttribute('src', 'images/white.png');
                cards[secondImgId].setAttribute('src', 'images/white.png');
                cards[firstImgId].removeEventListener('click', flipCard);
                cards[secondImgId].removeEventListener('click', flipCard);
                cardsWon.push(firstImgId, secondImgId)
                console.log('match')
                result.textContent = cardsWon.length

                console.log(cardsWon)
            } else if (firstImg != secondImg) {

                cards[firstImgId].setAttribute('src', 'images/blank.png');
                cards[secondImgId].setAttribute('src', 'images/blank.png');
                console.log('fail')
            }
            if (cardsWon.length === 12) {


                alert('YOU WON !!!')
            }
            cardsChosen = [];
            cardsChosenId = [];

        }

    }

    creatBoard()





})
