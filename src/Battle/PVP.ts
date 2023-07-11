import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _fighter1: Fighter;
  private _fighter2: Fighter;

  constructor(fighter1: Character | Fighter, fighter2: Character | Fighter) {
    super(fighter1);
    this._fighter1 = fighter1;
    this._fighter2 = fighter2;
  }

  fight(): number {
    this._fighter1.attack(this._fighter2);
    if (this._fighter2.lifePoints === -1) {
      return 1;
    }
    this._fighter2.attack(this._fighter1);
    if (this._fighter1.lifePoints === -1) {
      return this._fighter1.lifePoints;
    }
    return this.fight();
  }
}

export default PVP;