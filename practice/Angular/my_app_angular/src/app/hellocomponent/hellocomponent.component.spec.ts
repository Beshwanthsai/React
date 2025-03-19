import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellocomponentComponent } from './hellocomponent.component';

describe('HellocomponentComponent', () => {
  let component: HellocomponentComponent;
  let fixture: ComponentFixture<HellocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HellocomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HellocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
