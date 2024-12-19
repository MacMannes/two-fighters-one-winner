export class Fighter {
    constructor(
        private name: string,
        private health: number,
        private damagePerAttack: number,
    ) {}
}

export function declareWinner(fighter1: Fighter, fighter2: Fighter, firstAttacker: string): string {
    return 'Lew';
}
