// "rock-paper-scissors-lizard-spock" game
// Coded by Valentin Vrinceanu
// Date: February 2016

var rpsls = (function () {

    var weapons = document.querySelectorAll('.choose img'),
        scoreElement = document.querySelector('.score'),
        userScoreElement = document.querySelector('.user-score'),
        computerScoreElement = document.querySelector('.computer-score'),
        userWeaponElement = document.querySelector('.user-weapon'),
        computerWeaponElement = document.querySelector('.computer-weapon'),
        userWeaponImage = document.createElement('img'),
        computerWeaponImage = document.createElement('img'),
        userScore = 0,
        computerScore = 0,
        userWeapon,
        computerWeapon,
        finalResult,
        weaponsAvailable = {
            'rock': 'rock',
            'paper': 'paper',
            'scissors': 'scissors',
            'lizard': 'lizard',
            'spock': 'spock'
        },
        results = {
            'tie': 'It is a tie',
            'userWin': 'You have won',
            'computerWin': 'You have lost'
        };

    function compare (userWeapon) {
        computerWeapon = computerChoice();

        if(userWeapon === computerWeapon) {
            finalResult = results.tie;
            updateScores(finalResult);
            return;
        }

        switch(userWeapon) {
            case "rock":
                return compareWeapons(computerWeapon, weaponsAvailable.scissors, weaponsAvailable.lizard);
             case "paper":
                return compareWeapons(computerWeapon, weaponsAvailable.rock, weaponsAvailable.spock);
             case "scissors":
                return compareWeapons(computerWeapon, weaponsAvailable.paper, weaponsAvailable.lizard);
             case "lizard":
                return compareWeapons(computerWeapon, weaponsAvailable.paper, weaponsAvailable.spock);
             case "spock":
                return compareWeapons(computerWeapon, weaponsAvailable.rock, weaponsAvailable.scissors);
         }
    }

    function compareWeapons(computerWeapon, weaponToBeat, weaponToBeat2) {
        if(computerWeapon === weaponToBeat || computerWeapon === weaponToBeat2) {
            finalResult = results.userWin;
        } else {
            finalResult = results.computerWin;
        }
        updateScores(finalResult);
    }

    function updateScores(finalResult) {
        if (finalResult === results.userWin) {
            userScore++;
            userScoreElement.innerHTML = userScore;
        }
        if (finalResult === results.computerWin) {
            computerScore++;
            computerScoreElement.innerHTML = computerScore;
        }
        userWeaponElement.appendChild(userWeaponImage);
        computerWeaponElement.appendChild(computerWeaponImage);
        scoreElement.innerHTML = finalResult;
    }

    function computerChoice() {
        var counter = 0,
            keys = Object.keys(weaponsAvailable),
            computerWeapon = weaponsAvailable[keys[keys.length * Math.random() << 0]]

        for(var i = 0; i < weapons.length; i++) {
            if(weapons[i].getAttribute('data-weapon') === computerWeapon) {
                computerWeaponImage.src = weapons[i].getAttribute('src');
            }
        }

        return computerWeapon;
    }

    function bindEvents() {
        for(var i = 0; i < weapons.length; i++) {
            weapons[i].addEventListener('click', function(){
                userWeapon = this.getAttribute('data-weapon');
                userWeaponImage.src = this.getAttribute('src');
                compare(userWeapon);
            })
        }
    }

    function init() {
        bindEvents();
    }

    return {
        init: init
    }
}());

rpsls.init();
