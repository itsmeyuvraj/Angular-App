import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppServerComponent } from './app-server.component';

describe('AppServerComponent', () => {
  let component: AppServerComponent;
  let fixture: ComponentFixture<AppServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
