import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BabyFood } from './baby-food';

describe('BabyFood', () => {
  let component: BabyFood;
  let fixture: ComponentFixture<BabyFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BabyFood],
    }).compileComponents();

    fixture = TestBed.createComponent(BabyFood);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
