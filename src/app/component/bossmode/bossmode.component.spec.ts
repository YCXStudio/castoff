/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BossmodeComponent } from './bossmode.component';

describe('BossmodeComponent', () => {
  let component: BossmodeComponent;
  let fixture: ComponentFixture<BossmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
