import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoiturePage } from './voiture.page';

describe('VoiturePage', () => {
  let component: VoiturePage;
  let fixture: ComponentFixture<VoiturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
