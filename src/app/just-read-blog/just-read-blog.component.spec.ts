import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustReadBlogComponent } from './just-read-blog.component';

describe('JustReadBlogComponent', () => {
  let component: JustReadBlogComponent;
  let fixture: ComponentFixture<JustReadBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JustReadBlogComponent]
    });
    fixture = TestBed.createComponent(JustReadBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
