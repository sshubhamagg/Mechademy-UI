import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChainComponent } from './view-chain.component';

describe('ViewChainComponent', () => {
  let component: ViewChainComponent;
  let fixture: ComponentFixture<ViewChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
