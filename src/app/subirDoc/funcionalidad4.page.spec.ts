import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Funcionalidad4Page } from './funcionalidad4.page';

describe('Funcionalidad4Page', () => {
  let component: Funcionalidad4Page;
  let fixture: ComponentFixture<Funcionalidad4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Funcionalidad4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
