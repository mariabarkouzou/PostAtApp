import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPostComponent } from './comment-post.component';

describe('CommentPostComponent', () => {
  let component: CommentPostComponent;
  let fixture: ComponentFixture<CommentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
