import { describe, expect, it } from 'vitest';
import { Fighter, declareWinner } from './two-fighters-one-winner';

describe('Two Fighters One Winner', () => {
    /**
     * fighter1 10,10
        fighter2, 2,2

        Fighter 1 wins in 1 turn
     */
    describe('Fighter 1 wins in 1 turn', () => {
        it('Creating an instance of the TwoFightersOneWinner class should work', () => {
            const fighter1 = new Fighter('Lew', 10, 10);
            const fighter2 = new Fighter('Harry', 2, 2);

            const winner = declareWinner(fighter1, fighter2, 'Lew');

            expect(winner).toBe('Lew');
        });
    });
});
