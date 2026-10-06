import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Womenswear } from './womenswear';

describe('Womenswear', () => {
  let component: Womenswear;
  let fixture: ComponentFixture<Womenswear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Womenswear],
    }).compileComponents();

    fixture = TestBed.createComponent(Womenswear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
