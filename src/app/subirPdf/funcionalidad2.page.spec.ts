import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Funcionalidad2Page } from './funcionalidad2.page';

describe('Funcionalidad2Page', () => {
  let component: Funcionalidad2Page;
  let fixture: ComponentFixture<Funcionalidad2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Funcionalidad2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
