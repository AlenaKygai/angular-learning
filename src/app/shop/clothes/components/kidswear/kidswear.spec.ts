import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Kidswear } from './kidswear';

describe('Kidswear', () => {
  let component: Kidswear;
  let fixture: ComponentFixture<Kidswear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kidswear],
    }).compileComponents();

    fixture = TestBed.createComponent(Kidswear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
