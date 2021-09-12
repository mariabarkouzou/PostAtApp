import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPostsComponent } from './list-of-posts.component';

describe('ListOfPostsComponent', () => {
  let component: ListOfPostsComponent;
  let fixture: ComponentFixture<ListOfPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
