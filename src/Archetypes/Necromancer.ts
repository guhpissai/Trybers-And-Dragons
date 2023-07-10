import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private energy: EnergyType;
  private static createdNecromancer = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Necromancer.createdNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
  
  static createdArchetypeInstances(): number {
    return this.createdNecromancer;
  }
}

export default Necromancer;