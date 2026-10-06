import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClothesRoot } from './clothes-root';

describe('ClothesRoot', () => {
  let component: ClothesRoot;
  let fixture: ComponentFixture<ClothesRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothesRoot],
    }).compileComponents();

    fixture = TestBed.createComponent(ClothesRoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
