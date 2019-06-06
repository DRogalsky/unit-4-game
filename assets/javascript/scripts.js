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
let shownVillian = $('#shownVillian');


var background = {

    hero: "",

    villian: "",

    wins: 0,

    characterSelect(chosenHero) {
        for(let i = 0; i < heroArray.length; i++) {
            if(heroArray[i].value === chosenHero) {
                this.hero = heroArray[i];
                $('#health').text(this.hero.currentHP);
                $('#attack').text(this.hero.currentAttack);
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
        if (this.villian !== "") {
            this.villian.currentHP -= this.hero.currentAttack;
            this.hero.currentHP -= this.villian.counterAttack;
            this.hero.currentAttack += this.hero.baseAttack;
            this.display();
            if(this.villian.currentHP <= 0) {
                this.fightWin();
            }
            if(this.hero.currentHP <= 0) {
                alert('you lose...');
                this.reset();
            }
        };
    },

    fightWin() {
        let villianValue = this.villian.value;
        $('#hidden').append($('div[value="'+villianValue+'"]'));
        villianContainer.css('display', 'inline-block');
        this.wins++;
        $(`div[value="`+villianValue+`"] .badHealth`).text(this.villian.baseHP);
        this.villian = "";
        if (this.wins === 5) {
            alert('you win!');
            this.reset();
        }
    },

    reset() {
        
        $('#villians').empty();

        $('#hidden').children().each(function() {
            let listItem = $('<li></li>');
        
            listItem.append(this);
            $('#villians').append(listItem)
        })
        villianContainer.css('display', 'none');

        if(this.hero.value === 'aaylaSecura') {
            $('#aaylaHome').append(secura);
        } 
        else if(this.hero.value === 'maceWindu') {
            $('#maceHome').append(windu);
        } 
        else {
            $('#yodaHome').append(jediYoda);
        }
        this.hero = "";
        this.villian = '';
        //TODO:reset everything and make the character select reapear
        for(villian in villianArray) {
            villianArray[villian].currentHP = villianArray[villian].baseHP;
        }
        for(jedi in heroArray) {
            heroArray[jedi].currentHP = heroArray[jedi].baseHP;
            heroArray[jedi].currentAttack = heroArray[jedi].baseAttack;
        }
        heroesContainer.css('display', 'inline-block');
    },

    display() {
        let villianValue = this.villian.value;
        $('#health').text(this.hero.currentHP);
        $('#attack').text(this.hero.currentAttack);
        $(`div[value="`+villianValue+`"] .badHealth`).text(this.villian.currentHP);
    }

};
var heroArray = [
    aaylaSecura = {
        value: 'aaylaSecura',
        baseHP: 50,
        baseAttack: 6,
        currentHP: 50,
        currentAttack: 6
        // 5,10,15,20,25,30,35,40,45,50
    },

    yoda = {
        value: 'yoda',
        baseHP: 40,
        baseAttack: 8,
        currentHP: 40,
        currentAttack: 8
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
        currentHP: 30
    },

    generalGrievous = {
        value: 'generalGrievous',
        baseHP: 60,
        counterAttack: 3,
        currentHP: 60
    },

    darthVader = {
        value: 'darthVader',
        baseHP: 120,
        counterAttack: 4,
        currentHP: 120
    },

    palpatine = {
        value: 'palpatine',
        baseHP: 100,
        counterAttack: 6,
        currentHP: 100
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