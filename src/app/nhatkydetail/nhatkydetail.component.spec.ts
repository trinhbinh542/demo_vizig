/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NhatkydetailComponent } from './nhatkydetail.component';

describe('NhatkydetailComponent', () => {
  let component: NhatkydetailComponent;
  let fixture: ComponentFixture<NhatkydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhatkydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhatkydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
