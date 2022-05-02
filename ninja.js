class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name, this.health, this.speed, this.strength);
    }

    drinksake() {
        this.health += 10;
        console.log(this.health);
    }
}

const ninja = new Ninja('Billy', 100);

ninja.sayName();
ninja.showStats();
ninja.drinksake();