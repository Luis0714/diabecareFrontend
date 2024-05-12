import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainLayoutPage } from './domain-layout.page';

describe('DomainLayoutPage', () => {
  let component: DomainLayoutPage;
  let fixture: ComponentFixture<DomainLayoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
