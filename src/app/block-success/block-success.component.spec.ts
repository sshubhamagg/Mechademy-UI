import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSuccessComponent } from './block-success.component';

describe('BlockSuccessComponent', () => {
  let component: BlockSuccessComponent;
  let fixture: ComponentFixture<BlockSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
