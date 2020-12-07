import {FieldCell} from "./field";

export enum LIMB_TYPE {
  ARM,
  FOOT
}
export enum LIMB_ORIENTATION {
  LEFT, RIGHT
}
export class Limb {
  player: Player
  type: LIMB_TYPE
  orientation: LIMB_ORIENTATION
  title: string;
  public cell: FieldCell
  constructor(player: Player, orientation: LIMB_ORIENTATION, type: LIMB_TYPE = LIMB_TYPE.ARM) {
    this.player = player;
    this.orientation = orientation;
    this.type = type;
    this.title = (this.orientation === LIMB_ORIENTATION.LEFT ? 'left   ' : 'right') + (this.type === LIMB_TYPE.ARM ? '🤚' : '🦶');
  }
}

export class Player {
    name: string;
    limbs: Limb[];

    constructor(name: string) {
        this.name = name;
        this.limbs = [
          new Limb(this, LIMB_ORIENTATION.LEFT),
          new Limb(this, LIMB_ORIENTATION.RIGHT),
          new Limb(this, LIMB_ORIENTATION.LEFT, LIMB_TYPE.FOOT),
          new Limb(this, LIMB_ORIENTATION.RIGHT, LIMB_TYPE.FOOT)
        ];
    }
}
