var rpsls = (function () {
    // "rock-paper-scissors-lizard-spock" game
    // Coded by Valentin Vrinceanu
    // Date: February 2016


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

    function compare(userWeapon) {
        computerWeapon = computerChoice();

        if(userWeapon === computerWeapon) {
            finalResult = results.tie;
            updateScores(finalResult);
            return;
        }

        if(userWeapon === weaponsAvailable.rock) {
            compareRock();
        }

        if(userWeapon === weaponsAvailable.paper) {
            comparePaper();
        }

        if(userWeapon === weaponsAvailable.scissors) {
            compareScissors();
        }

        if(userWeapon === weaponsAvailable.lizard) {
            compareLizard();
        }

        if(userWeapon === weaponsAvailable.spock) {
            compareSpock();
        }

        updateScores(finalResult);
    }

    function compareRock() {
        if(computerWeapon === weaponsAvailable.scissors || computerWeapon === weaponsAvailable.lizard) {
            finalResult = results.userWin;
        } else {
            finalResult = results.computerWin;
        }
    }

    function comparePaper() {
        if(computerWeapon === weaponsAvailable.rock || computerWeapon === weaponsAvailable.spock) {
            finalResult = results.userWin;
        } else {
            finalResult = results.computerWin;
        }
    }

    function compareScissors() {
        if(computerWeapon === weaponsAvailable.paper || computerWeapon === weaponsAvailable.lizard) {
            finalResult = results.userWin;
        } else {
            finalResult = results.computerWin;
        }
    }

    function compareLizard() {
        if(computerWeapon === weaponsAvailable.paper || computerWeapon === weaponsAvailable.spock) {
            finalResult = results.userWin;
        } else {
            finalResult = results.computerWin;
        }
    }

    function compareSpock() {
        if(computerWeapon === weaponsAvailable.rock || computerWeapon === weaponsAvailable.scissors) {
            finalResult = results.userWin;
        } else {
            finalResult = results.computerWin;
        }
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