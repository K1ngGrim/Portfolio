import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdAnimationWindow } from './cmd-animation-window';

describe('CmdAnimationWindow', () => {
  let component: CmdAnimationWindow;
  let fixture: ComponentFixture<CmdAnimationWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmdAnimationWindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmdAnimationWindow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
