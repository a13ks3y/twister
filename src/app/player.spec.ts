import {Player} from "./player";

describe('Player class', () => {
  let player: Player;
  beforeEach(() => {
    player = new Player('John');
  });

  it('player should has a name', () => {
    expect(player.name).toEqual('John');
  });

  it('player should has limbs, and it is 4', () => {
    expect(player.limbs).toBeInstanceOf(Array);
    expect(player.limbs.length).toEqual(4); //todo another "4" constant?
  });
});
