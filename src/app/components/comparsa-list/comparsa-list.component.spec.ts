import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparsaListComponent } from './comparsa-list.component';

describe('ComparsaListComponent', () => {
  let component: ComparsaListComponent;
  let fixture: ComponentFixture<ComparsaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparsaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparsaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
