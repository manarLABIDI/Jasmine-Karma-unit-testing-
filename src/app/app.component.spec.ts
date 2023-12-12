import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule], // Import RouterTestingModule for testing with Angular Router
    })
    .compileComponents() // Compile the component asynchronously
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Welcome to angular test'`, () => {
    expect(component.title).toEqual('Welcome to angular test');
  });

  it('should render title', () => {
    fixture.detectChanges(); // Trigger change detection

    const compiled = fixture.nativeElement;
    console.log(compiled.innerHTML); // Log the content to the console

    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular test');
  });
});
