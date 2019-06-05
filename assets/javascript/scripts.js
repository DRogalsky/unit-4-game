let dooku = $('#Count-Dooku');
let maul = $('#Darth-Maul');
let grievous = $('#General-Grievous');
let vader = $('#Darth-Vader');
let theEmporer = $('#Palpatine');
let secura = $('#Aayla-Secura');
let windu = $('#Mace-Windu');
let jediYoda = $('#Yoda');
let shownHero = $('#shownHero');
let villianContainer = $('#villianContainer');
let heroesContainer = $('#heroesContainer');

var background = {
    hero: "",
    villian: "",
    characterSelect(chosenHero) {
        for(let i = 0; i < heroArray.length; i++) {
            if(heroArray[i].value === chosenHero) {
                this.hero = heroArray[i];
            }
        } 
    },
    enemySelect(chosenTarget) {
        for(let i = 0; i < villianArray.length; i++) {
            if(villianArray[i].value === chosenTarget) {
                this.villian = villianArray[i];
            }
        }
    },
    fight() {
        this.villian.currentHP -= this.hero.currentAttack;
        this.hero.currentHP -= this.villian.counterAttack;
        this.hero.currentAttack += this.hero.baseAttack;
        console.log(this.villian.currentHP, this.hero.currentHP);
        if(this.villian.currentHP <= 0) {
            this.fightWin();
        }
    },
    fightWin() {
        let villianValue = this.villian.value;
        this.villian = ""
        //TODO:hide the villian and make the enemies list reapear?
    },
    reset() {
        this.hero.currentAttack = hero.baseAttack;
        this.hero.currentHP = hero.baseHP;
        //TODO:reset everything and make the character select reapear
    }
};
var heroArray = [
    aaylaSecura = {
        value: 'aaylaSecura',
        baseHP: 50,
        baseAttack: 5,
        currentHP: 30,
        currentAttack: 5
        // 5,10,15,20,25,30,35,40,45,50
    },

    yoda = {
        value: 'yoda',
        baseHP: 30,
        baseAttack: 6,
        currentHP: 30,
        currentAttack: 6
        // 6,12,18,24,30,36,42,48,54,60
    },

    maceWindu = {
        value: 'maceWindu',
        baseHP: 70,
        baseAttack: 4,
        currentHP: 70,
        currentAttack: 4
        // 4,8,12,16,20,24,28,32,36,40
    }
];

var villianArray = [
    darthMaul = {
        value: 'darthMaul',
        baseHP: 10,
        counterAttack: 1,
        currentHP: 10
    },

    countDooku = {
        value: 'countDooku',
        baseHP: 30,
        counterAttack: 2,
        currentHP: 20
    },

    generalGrievous = {
        value: 'generalGrievous',
        baseHP: 60,
        counterAttack: 4,
        currentHP: 20
    },

    darthVader = {
        value: 'darthVader',
        baseHP: 150,
        counterAttack: 3,
        currentHP: 50
    },

    palpatine = {
        value: 'palpatine',
        baseHP: 100,
        counterAttack: 6,
        currentHP: 30
    }
]


$(document).ready(function() {

    $('.hero').on('click', function() {
        if (background.hero === "") {
            background.characterSelect($(this).attr('value'));
            shownHero.append(this);
            heroesContainer.css('display', 'none');
            villianContainer.css('display', 'inline-block');
        }
    })

    $('.villian').on('click', function() {
        if (background.villian === "") {
            background.enemySelect($(this).attr('value'));
            shownVillian.append(this);
            villianContainer.css('display', 'none')
        }
    })

    $('#fightButton').on('click', function() {
        if (background.hero !== "" || background.villian !== "") {
            background.fight();
        }
    });

});