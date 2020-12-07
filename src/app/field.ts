import {Limb} from "./player";

export class FieldCell {
  private readonly x: number;
  private readonly y: number;
  public limb: Limb;
  private static COLORS: string[] = ['red', 'green', 'blue', 'gold'];
  public color: string;
  public number: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.color = FieldCell.COLORS[this.y];
    this.number = this.x + 1;
  }
}
export class Field {
    public readonly cells: FieldCell[] = [];
    private static WIDTH: number = 6;
    private static HEIGHT: number = 4;

    constructor() {
        for (let x = 0; x < Field.WIDTH; x++) {
            for (let y = 0; y < Field.HEIGHT; y++) {
                this.cells.push(new FieldCell(x, y));
            }
        }
    }
}
