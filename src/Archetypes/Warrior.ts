import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private energy: EnergyType;
  private static createdWarrior = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Warrior.createdWarrior += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return this.createdWarrior;
  }
}

export default Warrior;