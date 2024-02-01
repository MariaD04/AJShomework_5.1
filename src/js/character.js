export default class Character {
  constructor(name, type) {
    this.getName(name);
    this.getType(type);
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  getName(value) {
    if (typeof (value) === 'string' && value.length >= 2 && value.length <= 10) {
      this.name = value;
    } else {
      throw new Error('Name must be a string with the length from 2 to 10');
    }
  }

  getType(value) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (types.includes(value)) {
      this.type = value;
    } else {
      throw new Error('Wrong type');
    }
  }
}
