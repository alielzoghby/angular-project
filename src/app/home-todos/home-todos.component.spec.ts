import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTodosComponent } from './home-todos.component';

describe('HomeTodosComponent', () => {
  let component: HomeTodosComponent;
  let fixture: ComponentFixture<HomeTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
