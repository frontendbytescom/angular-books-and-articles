import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newElementName = '';
  newElementContent = '';
  @Output() bookCreated = new EventEmitter<{name: string, content: string}>();
  @Output() articleCreated = new EventEmitter<{name: string, content: string}>();

  onAddBook() {
    this.bookCreated.emit({
      name: this.newElementName,
      content: this.newElementContent
    });
  }

  onAddArticle() {
    this.articleCreated.emit({
      name: this.newElementName,
      content: this.newElementContent
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
