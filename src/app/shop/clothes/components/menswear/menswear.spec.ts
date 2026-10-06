import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menswear } from './menswear';

describe('Menswear', () => {
  let component: Menswear;
  let fixture: ComponentFixture<Menswear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menswear],
    }).compileComponents();

    fixture = TestBed.createComponent(Menswear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
