import Archetype from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(race: Race, archetype: Archetype) {
    this._dexterity = Math.floor(Math.random() * 10) + 1;
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = race.maxLifePoints / 2;
    this._lifePoints = race.maxLifePoints;
    this._strength = Math.floor(Math.random() * 10) + 1;
    this._defense = Math.floor(Math.random() * 10) + 1;
    this._energy = { 
      type_: archetype.energyType, 
      amount: Math.floor(Math.random() * 10) + 1, 
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
}

export default Character;