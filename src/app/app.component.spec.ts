import 'zone.js/dist/zone-testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CustomerDataService } from './services/customer-data.service';
import { CustomerDataServiceMock } from './mock/customer-data-service.mock';
import { BrowserDynamicTestingModule,
  platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
  import {MatMenuModule} from '@angular/material/menu';
  
describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: CustomerDataService, useClass: CustomerDataServiceMock}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CUSTOMER ANALYTICS'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CUSTOMER ANALYTICS');
  });
});
