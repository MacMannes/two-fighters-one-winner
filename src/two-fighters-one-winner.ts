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
    const secondHealth = fighter2.health;
    const defeat = secondHealth <= firstAttack ? true : false;
    if (defeat) return firstFighter.name;

    return 'No winner';
}
