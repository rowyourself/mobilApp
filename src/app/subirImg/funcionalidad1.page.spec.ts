import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Funcionalidad1Page } from './funcionalidad1.page';

describe('Funcionalidad1Page', () => {
  let component: Funcionalidad1Page;
  let fixture: ComponentFixture<Funcionalidad1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Funcionalidad1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
