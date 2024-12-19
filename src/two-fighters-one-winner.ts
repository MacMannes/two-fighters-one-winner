export class Fighter {
    constructor(
        public name: string,
        public health: number,
        public damagePerAttack: number,
    ) {}
}

export function declareWinner(fighter1: Fighter, fighter2: Fighter, firstAttacker: string): string {
    const firstFighter = fighter1.name === firstAttacker ? fighter1 : fighter2;
    const firstAttack = firstFighter.damagePerAttack;
    let firstHealth = firstFighter.health;

    const secondFighter = fighter1.name === firstAttacker ? fighter1 : fighter2;
    const secondAttack = fighter2.damagePerAttack;
    let secondHealth = fighter2.health;

    //const defeat = secondHealth <= firstAttack ? true : false;

    secondHealth -= firstAttack;
    if (secondHealth < 0) {
        return firstFighter.name;
    }

    firstHealth -= secondAttack;
    if (firstHealth < 0) {
        return secondFighter.name;
    }

    secondHealth -= firstAttack;
    if (secondHealth < 0) {
        return firstFighter.name;
    }

    firstHealth -= secondAttack;
    if (firstHealth < 0) {
        return secondFighter.name;
    }

    //if (defeat) return firstFighter.name;

    return 'No winner';
}
