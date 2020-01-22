import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCreationComponent } from './language-creation.component';

describe('LanguageCreationComponent', () => {
  let component: LanguageCreationComponent;
  let fixture: ComponentFixture<LanguageCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
