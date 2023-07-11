import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _fighter: Fighter;
  private _monsters: Fighter[] | SimpleFighter[]; 

  constructor(fighter: Fighter, monsters: Fighter[] | SimpleFighter[]) {
    super(fighter);
    this._fighter = fighter;
    this._monsters = monsters;
  }

  PvpBattle(): void {
    this._monsters.forEach((monster) => {
      if (this._fighter.lifePoints !== -1
        && monster.lifePoints !== -1) { this._fighter.attack(monster); }

      if (monster.lifePoints !== -1 
        && this._fighter.lifePoints !== -1) { monster.attack(this._fighter); }
    });
  }

  fight(): number {
    this.PvpBattle();
    if (this._fighter.lifePoints === -1) {
      return -1;
    }
    if (this._monsters.every((monster) => monster.lifePoints === -1)) {
      return 1;
    }
    return this.fight();
  }

  // fight(): number {
  //   this._monsters.forEach((monster) => {
  //     this._fighter.attack(monster);
  //     if (monster.lifePoints === -1) {
  //       return 1;
  //     }
  //     monster.attack(this._fighter);
  //     if (this._fighter.lifePoints === -1) {
  //       return -1;
  //     }
  //   });
  //   return this.fight();
  // }
}

export default PVE;