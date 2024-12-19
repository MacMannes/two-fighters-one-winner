export class Fighter {
    isDead() {
        return this.health < 0;
    }
    hit(damagePerAttack: number) {
        this.health -= damagePerAttack;
    }
    constructor(
        public name: string,
        public health: number,
        public damagePerAttack: number,
    ) {}
}

export function declareWinner(fighter1: Fighter, fighter2: Fighter, firstAttacker: string): string {
    let firstFighter = fighter1.name === firstAttacker ? fighter1 : fighter2;
    const secondFighter = fighter1.name === firstAttacker ? fighter1 : fighter2;

    while (!firstFighter.isDead() && !secondFighter.isDead()) {
        firstFighter.hit(secondFighter.damagePerAttack);
        firstFighter = secondFighter;
    }
    if (firstFighter.isDead()) return secondFighter.name;
    return firstFighter.name;
}
