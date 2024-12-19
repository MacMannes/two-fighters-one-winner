import { describe, expect, it } from 'vitest';
import { TwoFightersOneWinner } from './two-fighters-one-winner';

describe('Two Fighters One Winner', () => {
    it('Creating an instance of the TwoFightersOneWinner class should work', () => {
        const clazz = new TwoFightersOneWinner();
        expect(clazz).toBeDefined();
    });
});
