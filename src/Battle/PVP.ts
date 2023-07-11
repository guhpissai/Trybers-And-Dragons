import Character from '../Character';
import Battle from './Battle';

class PVP extends Battle {
  private _fighter1: Character;
  private _fighter2: Character;

  constructor(fighter1: Character, fighter2: Character) {
    super(fighter1);
    super.fight();
    this._fighter1 = fighter1;
    this._fighter2 = fighter2;
  }

  fight(): number {
    this._fighter1.attack(this._fighter2);
    if (this._fighter2.lifePoints === -1) {
      return this._fighter2.lifePoints;
    }
    this._fighter2.attack(this._fighter1);
    if (this._fighter1.lifePoints === -1) {
      return this._fighter1.lifePoints;
    }
    return this.fight();
  }
}

export default PVP;