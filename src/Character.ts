import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name: string, 
    race = new Elf(name, 20), 
    archetype = new Mage(name),
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = race.maxLifePoints / 2;
    this._lifePoints = race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: archetype.energyType, 
      amount: getRandomInt(1, 10), 
    };
  }
  
  public get dexterity() : number {
    return this._dexterity;
  }

  public get race() : Race {
    return this._race;
  }

  public get archetype() : Archetype {
    return this._archetype;
  }

  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength() : number {
    return this._strength;
  }

  public get defense() : number {
    return this._defense;
  }

  public get energy() : Energy {
    return this._energy;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (damage > this._lifePoints) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    if (this._lifePoints < this._maxLifePoints) {
      this._lifePoints += getRandomInt(1, 10);
    }
  }

  special(enemy: Fighter | SimpleFighter): void {
    this._defense += 10;
    this._lifePoints += 10;
    enemy.receiveDamage(10);
  }
}

export default Character;