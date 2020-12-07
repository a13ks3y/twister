import {TestBed} from '@angular/core/testing';

import {GameService} from './game.service';
import {RandomService} from "./random.service";
import {LIMB_ORIENTATION, LIMB_TYPE} from "./player";
import {Field} from "./field";

class MockRandomService extends RandomService{
  public static quarters: number[] = []
  public static doubledozens: number[] = []
  public static fill() {
    let j = 3;
    let u = 24;
    for(let i = 0; i < 100; i ++) {
      MockRandomService.quarters.push(j);
      MockRandomService.doubledozens.push(u);
      j = j >= 1 ? j - 1 : 3;
      u = u >= 1 ? u - 1 : 24;
    }
  }
  int(min:number, max: number = undefined) {
    if (!MockRandomService.quarters.length || !MockRandomService.doubledozens.length) {
      MockRandomService.fill();
    }
    return min == 4 && max == undefined ? MockRandomService.quarters.pop() : (min == 24 ? MockRandomService.doubledozens.pop() : super.int(min, max));
  }
}

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    MockRandomService.fill();
    TestBed.configureTestingModule({providers: [
        {
          provide: RandomService,
          useClass: MockRandomService
        }
      ]});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should store default players', () => {
    expect(service.players).toBeInstanceOf(Array);
  })
  it('should be 4 default players', () => {
    expect(service.players.length).toEqual(4);
    expect(service.players[0].name).toEqual('Alice');
    expect(service.players[1].name).toEqual('Bob');
    expect(service.players[2].name).toEqual('Charly');
    expect(service.players[3].name).toEqual('Dilan');
  });
  it('should set current player to first player when step is called', () => {
    service.step();
    expect(service.currentPlayer).toBeDefined();
    expect(service.currentPlayer.name).toEqual('Alice');
  });
  it('should set current player to second player when step is called twice', () => {
    service.step();
    service.step();
    expect(service.currentPlayer).toBeDefined();
    expect(service.currentPlayer.name).toEqual('Bob');
  });

  it ('should set current player to first after last', () => {
    service.step();
    expect(service.currentPlayer.name).toEqual('Alice');
    service.step();
    expect(service.currentPlayer.name).toEqual('Bob');
    service.step();
    expect(service.currentPlayer.name).toEqual('Charly');
    service.step();
    expect(service.currentPlayer.name).toEqual('Dilan');
    service.step();
    expect(service.currentPlayer).toBeDefined();
    expect(service.currentPlayer.name).toEqual('Alice');
  });

  it('should has field property', () => {
    expect(service.field).toBeInstanceOf(Field);
  });

  it('field should has 6*4=24 cells', () => {
    expect(service.field.cells.length).toEqual(24);
  });

  it('should set current player random limb to a random free cell on the field', () => {
    service.step();
    expect(service.field.cells[0].limb).toBeDefined();
    expect(service.field.cells[0].limb.player.name).toEqual('Alice');
    expect(service.field.cells[0].limb.orientation).toEqual(LIMB_ORIENTATION.LEFT, 'orientation should be right');
    expect(service.field.cells[0].limb.type).toEqual(LIMB_TYPE.ARM, 'type should be arm');
  });

  it('should set next current player random limb to a random free cell on the field', () => {
    service.step();
    service.step();
    expect(service.field.cells[1].limb).toBeDefined();
    expect(service.field.cells[1].limb.player.name).toEqual('Bob');
    expect(service.field.cells[1].limb.orientation).toEqual(LIMB_ORIENTATION.RIGHT, 'orientation should be right');
    expect(service.field.cells[1].limb.type).toEqual(LIMB_TYPE.ARM, 'type should be arm');
  });

  it('should remove current player when removePlayer is called', () => {
    service.step();
    service.step();
    service.removePlayer();
    expect(service.players.length).toEqual(3);
    expect(service.players.find(p => p.name == 'Bob')).toBeUndefined();
  })
});
