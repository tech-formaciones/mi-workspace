import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiLibComponent } from './mi-lib.component';

describe('MiLibComponent', () => {
  let component: MiLibComponent;
  let fixture: ComponentFixture<MiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
