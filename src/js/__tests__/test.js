import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Undead from '../undead';
import Swordsman from '../swordsman';
import Zombie from '../zombie';
import Character from '../character';

describe.each([
  [Bowman, 'Bowman', 25, 25],
  [Swordsman, 'Swordsman', 40, 10],
  [Magician, 'Magician', 10, 40],
  [Undead, 'Undead', 25, 25],
  [Zombie, 'Zombie', 40, 10],
  [Daemon, 'Daemon', 10, 40],
])('create class', (Class, type, attack, defence) => {
  test('trow error, when passed not a string', () => {
    const result = () => new Class(123);
    expect(result).toThrow('Name must be a string with the length from 2 to 10');
  });

  test('trow error, when passed less than 2 symbols', () => {
    const result = () => new Class('a');
    expect(result).toThrow('Name must be a string with the length from 2 to 10');
  });

  test('trow error, when passed more than 10 symbols', () => {
    const result = () => new Class('abcdefghijk');
    expect(result).toThrow('Name must be a string with the length from 2 to 10');
  });

  test('wrong type', () => {
    const result = () => new Character('player', 'Character');
    expect(result).toThrow('Wrong type');
  });

  test('correct name and type', () => {
    const result = new Class('player');
    expect(result).toEqual({
      name: 'player',
      type,
      health: 100,
      level: 1,
      attack,
      defence,
    });
  });
});
