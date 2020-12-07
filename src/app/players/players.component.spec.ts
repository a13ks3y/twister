import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show players list', () => {
    expect(component.players).toBeDefined();
    expect(component.players.length).toEqual(4, 'players length should be 4'); //todo move 4 to a constant?
    expect(fixture.nativeElement.querySelectorAll('li.tw-player-info').length).toEqual(4, 'li blocks should be 4');
  });
});
