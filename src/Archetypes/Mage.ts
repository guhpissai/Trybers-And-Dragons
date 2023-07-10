import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private energy: EnergyType;
  private static createdMage = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Mage.createdMage += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return this.createdMage;
  }
}

export default Mage;