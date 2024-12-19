import { describe, expect, it } from 'vitest';
import { Fighter, declareWinner } from './two-fighters-one-winner';

describe('Two Fighters One Winner', () => {
    it('Fighter 1 wins in 1 turn', () => {
        const fighter1 = new Fighter('Lew', 10, 10);
        const fighter2 = new Fighter('Harry', 2, 2);

        const winner = declareWinner(fighter1, fighter2, 'Lew');

        expect(winner).toBe('Lew');
    });

    it('Fighter 2 wins in 1 turn', () => {
        const fighter1 = new Fighter('Lew', 2, 2);
        const fighter2 = new Fighter('Harry', 10, 10);

        const winner = declareWinner(fighter1, fighter2, 'Harry');

        expect(winner).toBe('Harry');
    });
});
