import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchComponentComponent } from './bench-component.component';

describe('BenchComponentComponent', () => {
  let component: BenchComponentComponent;
  let fixture: ComponentFixture<BenchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
