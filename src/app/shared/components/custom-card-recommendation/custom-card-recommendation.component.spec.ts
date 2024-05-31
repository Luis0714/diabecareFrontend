import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomCardRecommendationComponent } from './custom-card-recommendation.component';

describe('CustomCardRecommendationComponent', () => {
  let component: CustomCardRecommendationComponent;
  let fixture: ComponentFixture<CustomCardRecommendationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardRecommendationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCardRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
