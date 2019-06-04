let dooku = $('Count-Dooku');
let maul = $('Darth-Maul');
let grievous = $('General-Grievous');
let vader = $('Darth-Vader');
let theEmporer = $('Palpatine');
let secura = $('Aayla-Secura');
let windu = $('Mace-Windu');
let jediYoda = $('Yoda');

var background = {
    hero: "",
    villian: "",
    fight() {
        villian.currentHP -= hero.currentAttack;
        hero.currentHP -= villian.counterAttack;
        hero.currentAttack += hero.baseAttack;
    },
    fightWin() {
        villian.currentHP = villian.baseHP
        //TODO:hide the villian and make the enemies list reapear?
    },
    reset() {
        hero.currentAttack = hero.baseAttack;
        hero.currentHP = hero.baseHP;
        //TODO:reset everything and make the character select reapear
    }
};

var aaylaSecura = {
    baseHP: 50,
    baseAttack: 5,
    currentHP: 30,
    currentAttack: 5
    // 5,10,15,20,25,30,35,40,45,50
};

var yoda = {
    baseHP: 30,
    baseAttack: 6,
    currentHP: 30,
    currentAttack: 6
    // 6,12,18,24,30,36,42,48,54,60
};

var maceWindu = {
    baseHP: 70,
    baseAttack: 4,
    currentHP: 70,
    currentAttack: 4
    // 4,8,12,16,20,24,28,32,36,40
};

var darthMaul = {
    baseHP: 10,
    counterAttack: 1,
    currentHP: 10
};

var countDooku = {
    baseHP: 30,
    counterAttack: 2,
    currentHP: 20
}

var generalGrievous = {
    baseHP: 60,
    counterAttack: 4,
    currentHP: 20
}

var darthVader = {
    baseHP: 150,
    counterAttack: 3,
    currentHP: 50
}

var palpatine = {
    baseHP: 100,
    counterAttack: 6,
    currentHP: 30
}

