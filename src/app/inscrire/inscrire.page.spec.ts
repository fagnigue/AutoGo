import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscrirePage } from './inscrire.page';

describe('InscrirePage', () => {
  let component: InscrirePage;
  let fixture: ComponentFixture<InscrirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscrirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscrirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
