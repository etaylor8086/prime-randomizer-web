import { World } from './World';
import { Item } from './Item';
import { PrimeItemName } from './ItemType';
import { MersenneTwister } from './MersenneTwister';
import { Filler } from './Filler';
import { RandomAssumed } from './filler/RandomAssumed';

export class Randomizer {
    protected mode: string;
    protected logic: string;
    protected difficulty: string;
    protected world: World;
    protected rng: MersenneTwister;
    protected seed: number;

    constructor(mode: string, logic: string, difficulty: string) {
        this.mode = mode;
        this.logic = logic;
        this.difficulty = difficulty;
        this.world = new World(this.mode, this.logic, this.difficulty);

    }

    randomize(seed?: number): void {
        if (!seed)
            seed = this.getRandomInt(1, 1000000000);
        console.log("Using seed: " + seed);
        this.seed = seed;
        this.rng = new MersenneTwister(this.seed);
        new RandomAssumed(this.world, this.rng).fill(this.getArtifacts(), this.getPriorityItems(), this.getLuxuryItems(), this.getExpansions());
    }

    getWorld(): World {
        return this.world;
    }

    getSeed(): number {
        return this.seed;
    }

    getArtifacts(): Array<Item> {
        let artifacts: Array<Item> = [];
        let artifactsMap: Map<string, number> = new Map<string, number>();
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_TRUTH, 1);
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_STRENGTH, 1);
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_ELDER, 1);
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_WILD, 1);
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_LIFEGIVER, 1);
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_WARRIOR, 1);
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_CHOZO, 1);
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_NATURE, 1);
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_SUN, 1);
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_WORLD, 1);
		artifactsMap.set(PrimeItemName.ARTIFACT_OF_SPIRIT, 1);
        artifactsMap.set(PrimeItemName.ARTIFACT_OF_NEWBORN, 1);
        
        artifactsMap.forEach((value: number, key: string) => {
            for (let i = 0; i < value; i++)
                artifacts.push(Item.get(key));
        });
				
		return artifacts;
    }
    
    getPriorityItems(): Array<Item> {
		let items: Array<Item> = [];
		let itemsMap: Map<string, number> = new Map<string, number>();
		itemsMap.set(PrimeItemName.MISSILE_LAUNCHER, 1);
		itemsMap.set(PrimeItemName.MORPH_BALL, 1);
        
        itemsMap.forEach((value: number, key: string) => {
            for (let i = 0; i < value; i++)
                items.push(Item.get(key));
        });
				
		return items;
    }
    
    getLuxuryItems(): Array<Item> {
		let items: Array<Item> = [];
		let itemsMap: Map<string, number> = new Map<string, number>();
		itemsMap.set(PrimeItemName.MORPH_BALL_BOMB, 1);
        itemsMap.set(PrimeItemName.VARIA_SUIT, 1);
        itemsMap.set(PrimeItemName.GRAVITY_SUIT, 1);
        itemsMap.set(PrimeItemName.PHAZON_SUIT, 1);
		itemsMap.set(PrimeItemName.SPACE_JUMP_BOOTS, 1);
		itemsMap.set(PrimeItemName.WAVE_BEAM, 1);
		itemsMap.set(PrimeItemName.ICE_BEAM, 1);
		itemsMap.set(PrimeItemName.PLASMA_BEAM, 1);
		itemsMap.set(PrimeItemName.CHARGE_BEAM, 1);
        itemsMap.set(PrimeItemName.POWER_BOMB, 1);
        itemsMap.set(PrimeItemName.THERMAL_VISOR, 1);
        itemsMap.set(PrimeItemName.XRAY_VISOR, 1);
		itemsMap.set(PrimeItemName.BOOST_BALL, 1);
		itemsMap.set(PrimeItemName.SPIDER_BALL, 1);
        itemsMap.set(PrimeItemName.GRAPPLE_BEAM, 1);
        itemsMap.set(PrimeItemName.SUPER_MISSILE, 1);
		itemsMap.set(PrimeItemName.WAVEBUSTER, 1);
		itemsMap.set(PrimeItemName.ICE_SPREADER, 1);
		itemsMap.set(PrimeItemName.FLAMETHROWER, 1);
		
		itemsMap.forEach((value: number, key: string) => {
            for (let i = 0; i < value; i++)
                items.push(Item.get(key));
        });
		
		return items;
    }
    
    getExpansions(): Array<Item> {
        let items: Array<Item> = [];
        let itemsMap: Map<string, number> = new Map<string, number>();
        itemsMap.set(PrimeItemName.MISSILE_EXPANSION, 49);
        itemsMap.set(PrimeItemName.ENERGY_TANK, 14);
        itemsMap.set(PrimeItemName.POWER_BOMB_EXPANSION, 4);

        itemsMap.forEach((value: number, key: string) => {
            for (let i = 0; i < value; i++)
                items.push(Item.get(key));
        });

        return items;
    }

    getRandomInt(min: number, max: number, rng: MersenneTwister = new MersenneTwister()) {
        return Math.floor(rng.random() * (max - min + 1)) + min;
    }
}