/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NhatkytheodoiComponent } from './nhatkytheodoi.component';

describe('NhatkytheodoiComponent', () => {
  let component: NhatkytheodoiComponent;
  let fixture: ComponentFixture<NhatkytheodoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhatkytheodoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhatkytheodoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
