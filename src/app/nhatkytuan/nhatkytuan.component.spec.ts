/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NhatkytuanComponent } from './nhatkytuan.component';

describe('NhatkytuanComponent', () => {
  let component: NhatkytuanComponent;
  let fixture: ComponentFixture<NhatkytuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhatkytuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhatkytuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
