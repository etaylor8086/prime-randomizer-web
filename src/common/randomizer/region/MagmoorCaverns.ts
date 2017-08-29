import {Region} from '../Region';
import {Location} from '../Location';
import {Item} from '../Item';
import {ItemCollection} from '../collection/ItemCollection';
import {PrimeItemName} from '../ItemType';

export class MagmoorCaverns extends Region {
  constructor() {
    super();
    this.name = 'Magmoor Caverns';
    this.locations = new Map<string, Location>([
      ['Lava Lake', new Location('Lava Lake', 'a4719c6a.mrea', 0x0004287c, true)],
      ['Triclops Pit', new Location('Triclops Pit', 'bad9edbf.mrea', 0x0006010c)],
      ['Storage Cavern', new Location('Storage Cavern', 'adef843e.mrea', 0x0008000f)],
      ['Transport Tunnel A', new Location('Transport Tunnel A', '47f2c087.mrea', 0x000a0006, true)],
      ['Warrior Shrine', new Location('Warrior Shrine', '89a6cb8d.mrea', 0x000b0037, true)],
      ['Shore Tunnel', new Location('Shore Tunnel', '901040df.mrea', 0x000c0028, true)],
      ['Fiery Shores (Morph Track)', new Location('Fiery Shores (Morph Track)', 'f5ef1862.mrea', 0x000e01da)],
      ['Fiery Shores (Warrior Shrine Tunnel)', new Location('Fiery Shores (Warrior Shrine Tunnel)', 'f5ef1862.mrea', 0x000e023f)],
      ['Plasma Processing', new Location('Plasma Processing', '4cc18e5a.mrea', 0x0015001f, true)],
      ['Magmoor Workstation', new Location('Magmoor Workstation', '8abeb3c3.mrea', 0x0017028e, true)],
    ]);
  }

  public initNoGlitches(): void {
    this.locations.get('Lava Lake').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.hasAnySuit() && items.canLayBombsOrPowerBombs() && items.has(PrimeItemName.SPACE_JUMP_BOOTS);
    };

    this.locations.get('Triclops Pit').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.hasAnySuit() && items.has(PrimeItemName.MORPH_BALL) && items.has(PrimeItemName.SPACE_JUMP_BOOTS)
        && items.has(PrimeItemName.XRAY_VISOR);
    };

    this.locations.get('Storage Cavern').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.hasAnySuit() && items.has(PrimeItemName.MORPH_BALL);
    };

    this.locations.get('Transport Tunnel A').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.hasAnySuit() && items.canLayBombs();
    };

    this.locations.get('Shore Tunnel').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.hasAnySuit() && items.canLayPowerBombs() && items.has(PrimeItemName.SPACE_JUMP_BOOTS);
    };

    this.locations.get('Fiery Shores (Morph Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.hasAnySuit() && items.canLayBombs() && items.has(PrimeItemName.SPACE_JUMP_BOOTS);
    };

    this.locations.get('Fiery Shores (Warrior Shrine Tunnel)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.hasAnySuit() && items.canLayPowerBombs() && items.has(PrimeItemName.BOOST_BALL)
        && items.has(PrimeItemName.SPACE_JUMP_BOOTS);
    };
    this.locations.get('Fiery Shores (Warrior Shrine Tunnel)').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined)
        items = new ItemCollection([...items.toArray(), item]);
      return items.canLayBombs();
    };

    this.locations.get('Warrior Shrine').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.hasAnySuit() && items.has(PrimeItemName.MORPH_BALL) && items.has(PrimeItemName.BOOST_BALL) && items.has(PrimeItemName.SPACE_JUMP_BOOTS);
    };

    this.locations.get('Plasma Processing').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.hasAnySuit() && items.canLayBombs() && items.has(PrimeItemName.SPACE_JUMP_BOOTS)
        && items.has(PrimeItemName.WAVE_BEAM) && items.has(PrimeItemName.ICE_BEAM) && items.has(PrimeItemName.BOOST_BALL) && items.has(PrimeItemName.SPIDER_BALL)
        && items.has(PrimeItemName.GRAPPLE_BEAM);
    };
    this.locations.get('Plasma Processing').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined)
        items = new ItemCollection([...items.toArray(), item]);
      return items.has(PrimeItemName.PLASMA_BEAM);
    };

    this.locations.get('Magmoor Workstation').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.has(PrimeItemName.MORPH_BALL) && items.hasAnySuit() && items.has(PrimeItemName.SPACE_JUMP_BOOTS) && items.has(PrimeItemName.WAVE_BEAM)
        && items.has(PrimeItemName.THERMAL_VISOR);
    };
  }

  public initMinorGlitches(): void {
    const minVMRTanks = 6;
    this.locations.get('Lava Lake').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.has(PrimeItemName.MORPH_BALL)
        && (items.hasAnySuit() || items.hasEnergyTankCount(minVMRTanks));
    };

    this.locations.get('Triclops Pit').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.has(PrimeItemName.MORPH_BALL) && items.has(PrimeItemName.SPACE_JUMP_BOOTS)
        && (items.hasAnySuit() || items.hasEnergyTankCount(minVMRTanks));
    };

    this.locations.get('Storage Cavern').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.has(PrimeItemName.MORPH_BALL)
        && (items.hasAnySuit() || items.hasEnergyTankCount(minVMRTanks));
    };

    this.locations.get('Transport Tunnel A').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.canLayBombs()
        && (items.hasAnySuit() || items.hasEnergyTankCount(minVMRTanks));
    };

    this.locations.get('Shore Tunnel').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.canLayPowerBombs()
        && (items.hasAnySuit() || items.hasEnergyTankCount(minVMRTanks));
    };

    this.locations.get('Fiery Shores (Morph Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles()
        && (items.canLayBombs() || items.has(PrimeItemName.SPACE_JUMP_BOOTS))
        && (items.hasAnySuit() || items.hasEnergyTankCount(minVMRTanks));
    };

    this.locations.get('Fiery Shores (Warrior Shrine Tunnel)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.canLayPowerBombs()
        && (
          (items.hasAnySuit() && (items.canLayBombs() || items.has(PrimeItemName.SPACE_JUMP_BOOTS)))
            || (items.hasEnergyTankCount(minVMRTanks) && items.has(PrimeItemName.SPACE_JUMP_BOOTS))
        );
    };
    this.locations.get('Fiery Shores (Warrior Shrine Tunnel)').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined) {
        items = new ItemCollection([...items.toArray(), item]);
      }
      return items.canLayBombs();
    };

    this.locations.get('Warrior Shrine').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles()
      && (
        (items.hasAnySuit() && (items.canLayBombs() || items.has(PrimeItemName.SPACE_JUMP_BOOTS)))
          || (items.hasEnergyTankCount(minVMRTanks) && items.has(PrimeItemName.SPACE_JUMP_BOOTS))
      );
    };

    this.locations.get('Plasma Processing').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.canLayBombs() && items.has(PrimeItemName.SPACE_JUMP_BOOTS)
        && items.has(PrimeItemName.WAVE_BEAM) && items.has(PrimeItemName.ICE_BEAM) && items.has(PrimeItemName.BOOST_BALL)
        && (items.hasAnySuit() || items.hasEnergyTankCount(minVMRTanks));
    };
    this.locations.get('Plasma Processing').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined) {
        items = new ItemCollection([...items.toArray(), item]);
      }
      return items.has(PrimeItemName.PLASMA_BEAM);
    };

    this.locations.get('Magmoor Workstation').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMissiles() && items.has(PrimeItemName.MORPH_BALL) && items.has(PrimeItemName.SPACE_JUMP_BOOTS)
        && items.has(PrimeItemName.WAVE_BEAM)
        && (items.hasAnySuit() || items.hasEnergyTankCount(minVMRTanks));
    };
  }
}
