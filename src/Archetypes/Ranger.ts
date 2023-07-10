import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private energy: EnergyType;
  private static createdRanger = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Ranger.createdRanger += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return this.createdRanger;
  }
}

export default Ranger;