import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTextAreaComponent } from './go-text-area.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';

describe('GoTextAreaComponent', () => {
  let component: GoTextAreaComponent;
  let fixture: ComponentFixture<GoTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoTextAreaComponent],
      imports: [
        FormsModule,
        GoFormErrorsModule,
        GoHintModule,
        GoRequiredTextModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTextAreaComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {

    it('doesn\'n error if no minlength passed in', () => {
      component.minlength = undefined;
      component.maxlength = 20;

      component.ngOnInit();

      expect(component.minlength).toBe(undefined);
      expect(component.maxlength).toBe(20);
    });

    it('doesn\'n error if no maxlength passed in', () => {
      component.minlength = 20;
      component.maxlength = undefined;

      component.ngOnInit();

      expect(component.minlength).toBe(20);
      expect(component.maxlength).toBe(undefined);
    });

    it('sets minlength to 0 if minlength is greater than maxlength', () => {
      component.minlength = 150;
      component.maxlength = 100;

      component.ngOnInit();

      expect(component.minlength).toBe(0);
      expect(component.maxlength).toBe(100);
    });
  });
});
