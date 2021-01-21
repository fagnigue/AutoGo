import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorieVoiturePage } from './categorie-voiture.page';

describe('CategorieVoiturePage', () => {
  let component: CategorieVoiturePage;
  let fixture: ComponentFixture<CategorieVoiturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieVoiturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorieVoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
